const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

let artworks = [
  { id: 1, title: 'Abstract Painting', price: 150, image: 'images/artwork1.jpg', available: true, bookedBy: null },
  { id: 2, title: 'Landscape Scene', price: 200, image: 'images/artwork2.jpg', available: true, bookedBy: null },
  { id: 3, title: 'Portrait Study', price: 120, image: 'images/artwork3.jpg', available: true, bookedBy: null },
  { id: 4, title: 'Modern Sculpture', price: 300, image: 'images/artwork4.jpg', available: true, bookedBy: null },
  { id: 5, title: 'Watercolor Flower', price: 80, image: 'images/artwork5.jpg', available: true, bookedBy: null }
];

let bookings = [];

app.get('/api/artworks', (req, res) => {
  res.json(artworks);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt)));
});

app.post('/api/book', (req, res) => {
  const { id, user } = req.body;
  const item = artworks.find(x => x.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Artwork not found' });
  }
  if (!item.available) {
    return res.status(400).json({ message: 'Artwork already booked by ' + item.bookedBy });
  }
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ message: 'Customer name and email are required' });
  }

  item.available = false;
  item.bookedBy = user.name;

  // Store booking record
  bookings.push({
    id: item.id,
    title: item.title,
    price: item.price,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone || '',
    customerAddress: user.address || '',
    bookedAt: new Date().toISOString()
  });

  res.json({ success: true, item });
});

app.post('/api/unbook', (req, res) => {
  const { id } = req.body;
  const item = artworks.find(x => x.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Artwork not found' });
  }

  item.available = true;
  item.bookedBy = null;

  // Remove booking record so notifications clear
  bookings = bookings.filter(b => b.id !== id);

  res.json({ success: true, item, bookings });
});

app.listen(port, () => {
  console.log(`Artwork booking API listening at http://localhost:${port}`);
});