# Services Content & Media

- Source document (services): https://docs.google.com/document/d/1Hj83ESABEcr2Vbz-FkKKUETH4Lmw2HLic_5UgJ1fqn4/edit?usp=drivesdk
- Images folder: https://drive.google.com/drive/folders/1QumYy4F5M2mUQN7X2eqfOTHV5qgEHGjo

Planned extraction:
- Copy service names, descriptions, and prices into JSON under `content/services.en.json`, `services.hi.json`, `services.kn.json`.
- Download images as `.webp`, crop to square 512x512, name as `service-<slug>.webp`, and place under `images/services/`.
- Map each service JSON entry to an image filename and alt text.

Image optimization checklist:
- Convert to WebP, quality 75.
- Use `loading="lazy"` and `decoding="async"`.
- Provide descriptive `alt` text in all languages.

Notes:
- Keep drive links private if needed; store optimized copies in repo.
- If an image is missing, fallback to `images/icon-192.svg`.