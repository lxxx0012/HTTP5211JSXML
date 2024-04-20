const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend URL
}));

mongoose.connect('mongodb+srv://alexyeeca:cHYYS9ymB7MsE7gi@portfolio.sclfhjr.mongodb.net/projects', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  url: String,
  languages: String 
});

const Item = mongoose.model('Item', itemSchema, 'portfolios.items');

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});