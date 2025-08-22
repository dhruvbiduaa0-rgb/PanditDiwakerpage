const express = require('express');
const router = express.Router();

// In-memory storage for demo purposes (in production, use a database)
let contacts = [];
let bookings = [];

// Contact form submission
router.post('/inquiry', (req, res) => {
  try {
    const { name, email, phone, subject, message, service } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      subject,
      message,
      service: service || '',
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    
    contacts.push(contact);
    
    // In production, send email notification here
    
    res.status(201).json({
      message: 'Inquiry submitted successfully',
      contactId: contact.id,
      estimatedResponse: '24-48 hours'
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// Service booking
router.post('/booking', (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      serviceId, 
      preferredDate, 
      preferredTime,
      address,
      specialRequirements,
      numberOfPeople
    } = req.body;
    
    // Validation
    if (!name || !email || !phone || !serviceId || !preferredDate) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'serviceId', 'preferredDate']
      });
    }
    
    // Date validation
    const selectedDate = new Date(preferredDate);
    const today = new Date();
    if (selectedDate < today) {
      return res.status(400).json({ error: 'Preferred date cannot be in the past' });
    }
    
    const booking = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      serviceId,
      preferredDate,
      preferredTime: preferredTime || 'flexible',
      address: address || '',
      specialRequirements: specialRequirements || '',
      numberOfPeople: numberOfPeople || 1,
      timestamp: new Date().toISOString(),
      status: 'pending',
      bookingNumber: `BK${Date.now().toString().slice(-6)}`
    };
    
    bookings.push(booking);
    
    // In production, send confirmation email and SMS here
    
    res.status(201).json({
      message: 'Booking request submitted successfully',
      bookingId: booking.id,
      bookingNumber: booking.bookingNumber,
      nextSteps: [
        'We will review your booking request within 24 hours',
        'You will receive a confirmation email with further details',
        'Our team will contact you to finalize arrangements'
      ]
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit booking' });
  }
});

// Get all contacts (admin only)
router.get('/inquiries', (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    
    let filteredContacts = [...contacts];
    
    if (status) {
      filteredContacts = filteredContacts.filter(contact => contact.status === status);
    }
    
    // Sort by timestamp (newest first)
    filteredContacts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedContacts = filteredContacts.slice(startIndex, endIndex);
    
    res.json({
      contacts: paginatedContacts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredContacts.length / limit),
        totalContacts: filteredContacts.length
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// Get all bookings (admin only)
router.get('/bookings', (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    
    let filteredBookings = [...bookings];
    
    if (status) {
      filteredBookings = filteredBookings.filter(booking => booking.status === status);
    }
    
    // Sort by preferred date
    filteredBookings.sort((a, b) => new Date(a.preferredDate) - new Date(b.preferredDate));
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedBookings = filteredBookings.slice(startIndex, endIndex);
    
    res.json({
      bookings: paginatedBookings,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredBookings.length / limit),
        totalBookings: filteredBookings.length
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Update contact status (admin only)
router.patch('/inquiry/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    
    const contact = contacts.find(c => c.id === id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    contact.status = status;
    if (notes) {
      contact.notes = notes;
    }
    contact.updatedAt = new Date().toISOString();
    
    res.json({ message: 'Contact status updated successfully', contact });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact status' });
  }
});

// Update booking status (admin only)
router.patch('/booking/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes, confirmedDate, confirmedTime } = req.body;
    
    const booking = bookings.find(b => b.id === id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    booking.status = status;
    if (notes) {
      booking.notes = notes;
    }
    if (confirmedDate) {
      booking.confirmedDate = confirmedDate;
    }
    if (confirmedTime) {
      booking.confirmedTime = confirmedTime;
    }
    booking.updatedAt = new Date().toISOString();
    
    res.json({ message: 'Booking status updated successfully', booking });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to update booking status' });
  }
});

// Get contact statistics
router.get('/stats', (req, res) => {
  try {
    const totalContacts = contacts.length;
    const totalBookings = bookings.length;
    
    const contactStats = {
      new: contacts.filter(c => c.status === 'new').length,
      inProgress: contacts.filter(c => c.status === 'in-progress').length,
      resolved: contacts.filter(c => c.status === 'resolved').length
    };
    
    const bookingStats = {
      pending: bookings.filter(b => b.status === 'pending').length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length
    };
    
    res.json({
      contacts: {
        total: totalContacts,
        byStatus: contactStats
      },
      bookings: {
        total: totalBookings,
        byStatus: bookingStats
      },
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;