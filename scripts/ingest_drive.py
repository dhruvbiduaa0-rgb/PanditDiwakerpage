#!/usr/bin/env python3
import io
import json
import os
import re
import shutil
import sys
import tempfile
import zipfile
from dataclasses import dataclass
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from PIL import Image

WORKSPACE = Path(__file__).resolve().parents[1]
CONTENT_DIR = WORKSPACE / 'content'
IMAGES_DIR = WORKSPACE / 'images' / 'services'
HERO_DIR = WORKSPACE / 'images'

FOLDER_HTML = CONTENT_DIR / 'drive_folder.html'
DOC_SOURCE_TXT = CONTENT_DIR / 'services_source.txt'

IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def slugify(text: str) -> str:
	text = text.strip().lower()
	text = re.sub(r"[^a-z0-9\s\-_/]", "", text)
	text = re.sub(r"[\s_/]+", "-", text)
	text = re.sub(r"-+", "-", text)
	return text.strip('-')


@dataclass
class DriveEntry:
	file_id: str
	title: str


def parse_drive_folder(html_path: Path) -> list[DriveEntry]:
	if not html_path.exists():
		raise FileNotFoundError(f"Missing {html_path}")
	html = html_path.read_text(encoding='utf-8', errors='ignore')
	soup = BeautifulSoup(html, 'html.parser')
	entries = []
	for div in soup.select('.flip-entry'):
		anchor = div.select_one('a[href*="/document/d/"]')
		title_el = div.select_one('.flip-entry-title')
		if not anchor or not title_el:
			continue
		href = anchor.get('href', '')
		m = re.search(r"/document/d/([\w-]+)/", href)
		if not m:
			continue
		file_id = m.group(1)
		title = title_el.get_text(strip=True)
		entries.append(DriveEntry(file_id=file_id, title=title))
	return entries


def download_doc_zip(file_id: str) -> bytes:
	url = f"https://docs.google.com/document/d/{file_id}/export?format=zip"
	r = requests.get(url, timeout=60)
	r.raise_for_status()
	return r.content


def extract_first_image_from_zip(zip_bytes: bytes) -> Image.Image | None:
	with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
		# Find first file under images/ or similar with image extension
		image_names = [
			name for name in zf.namelist()
			if re.search(r"\.(png|jpe?g|webp|gif|bmp|tiff)$", name, re.I)
		]
		if not image_names:
			return None
		# Prefer largest image by file size
		image_names.sort(key=lambda n: zf.getinfo(n).file_size, reverse=True)
		with zf.open(image_names[0]) as f:
			img = Image.open(io.BytesIO(f.read())).convert('RGBA')
			return img


def crop_to_square(img: Image.Image) -> Image.Image:
	w, h = img.size
	side = min(w, h)
	left = (w - side) // 2
	top = (h - side) // 2
	box = (left, top, left + side, top + side)
	return img.crop(box)


def save_webp(img: Image.Image, out_path: Path, size: int = 512, quality: int = 80) -> None:
	img = img.copy()
	img = crop_to_square(img)
	img = img.resize((size, size), Image.LANCZOS)
	# Flatten alpha onto white background if present
	if img.mode in ('RGBA', 'LA'):
		background = Image.new('RGBA', img.size, (255, 255, 255, 255))
		background.paste(img, mask=img.split()[-1])
		img = background.convert('RGB')
	else:
		img = img.convert('RGB')
	out_path.parent.mkdir(parents=True, exist_ok=True)
	img.save(out_path, format='WEBP', quality=quality, method=6)


HI_DESCRIPTIONS = []
if DOC_SOURCE_TXT.exists():
	try:
		hi_text = DOC_SOURCE_TXT.read_text(encoding='utf-8', errors='ignore')
		HI_DESCRIPTIONS = hi_text.splitlines()
	except Exception:
		HI_DESCRIPTIONS = []


def find_hi_snippet_for(title: str) -> str:
	# Heuristic matching based on keywords
	pairs = [
		('ganesh', 'गणेश'),
		('lakshmi', 'लक्ष्मी'),
		('durga', 'दुर्गा'),
		('navratri', 'दुर्गा'),
		('saraswati', 'सरस्वती'),
		('satnarayan', 'सत्यनारायण'),
		('satyanarayan', 'सत्यनारायण'),
		('navgrah', 'नवग्रह'),
		('navgrah', 'नवग्रह'),
		('kalsarp', 'काल सर्प'),
		('namkaran', 'नामकरण'),
		('vivah', 'विवाह'),
		('grih', 'गृह'),
		('vastu', 'वास्तु'),
		('bhoomi', 'भूमि'),
		('maham', 'महामृत्युंजय'),
		('rudra', 'रुद्र'),
		('shanti', 'शांति'),
	]
	key_hi = None
	lower = title.lower()
	for en, hi in pairs:
		if en in lower:
			key_hi = hi
			break
	if not key_hi or not HI_DESCRIPTIONS:
		return 'पूजा एवं कर्मकांड संबंधित सेवा। अधिक जानकारी के लिए संपर्क करें।'
	for i, line in enumerate(HI_DESCRIPTIONS):
		if key_hi in line:
			# Collect a few subsequent lines as snippet
			snippet = [line]
			for j in range(1, 4):
				if i + j < len(HI_DESCRIPTIONS):
					l2 = HI_DESCRIPTIONS[i + j].strip()
					if l2:
						snippet.append(l2)
				else:
					break
			return ' '.join(snippet)[:380]
	return 'पूजा एवं कर्मकांड संबंधित सेवा। अधिक जानकारी के लिए संपर्क करें।'


def main():
	entries = parse_drive_folder(FOLDER_HTML)
	if not entries:
		print('No entries found in folder HTML. Ensure the folder is public and HTML saved.', file=sys.stderr)
		return 1

	services = []
	# Identify hero candidates
	durga_entry = next((e for e in entries if re.search(r"durga|navratri", e.title, re.I)), None)
	ganesh_entry = next((e for e in entries if re.search(r"ganesh", e.title, re.I)), None)

	for entry in entries:
		slug = slugify(entry.title)
		img_out = IMAGES_DIR / f'service-{slug}.webp'
		image_ok = False
		try:
			zip_bytes = download_doc_zip(entry.file_id)
			img = extract_first_image_from_zip(zip_bytes)
			if img is not None:
				save_webp(img, img_out)
				image_ok = True
				# Save hero images if matching
				if durga_entry and entry.file_id == durga_entry.file_id:
					save_webp(img, HERO_DIR / 'hero-durga.webp', size=768)
				if ganesh_entry and entry.file_id == ganesh_entry.file_id:
					save_webp(img, HERO_DIR / 'hero-ganesh.webp', size=512)
		except Exception as e:
			print(f"Failed to process images for {entry.title}: {e}", file=sys.stderr)
		desc_hi = find_hi_snippet_for(entry.title)
		services.append({
			'id': slug,
			'title': entry.title.strip(),
			'description_hi': desc_hi,
			'description_en': entry.title.strip(),
			'image': f'./images/services/service-{slug}.webp' if image_ok else './images/icon-192.svg',
			'alt_hi': f'{entry.title} सेवा के लिए चित्र',
			'alt_en': f'Image for {entry.title}',
		})

	# Save Hindi as primary
	(CONTENT_DIR / 'services.hi.json').write_text(
		json.dumps([{
			'id': s['id'],
			'title': s['title'],
			'description': s['description_hi'],
			'image': s['image'],
			'alt': s['alt_hi'],
		} for s in services], ensure_ascii=False, indent=2),
		encoding='utf-8'
	)
	# English fallback
	(CONTENT_DIR / 'services.en.json').write_text(
		json.dumps([{
			'id': s['id'],
			'title': s['title'],
			'description': s['description_en'],
			'image': s['image'],
			'alt': s['alt_en'],
		} for s in services], ensure_ascii=False, indent=2),
		encoding='utf-8'
	)
	print(f"Wrote {len(services)} services and images to {IMAGES_DIR}")
	return 0


if __name__ == '__main__':
	sys.exit(main())