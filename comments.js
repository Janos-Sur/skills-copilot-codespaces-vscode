// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Importing comments.json file
const comments = require('./comments.json');

// GET request
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST request
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

// PUT request
app.put('/comments', (req, res) => {
  res.send('PUT request to the homepage');
});

// DELETE request
app.delete('/comments', (req, res) => {
  res.send('DELETE request to the homepage');
});

// Listening to the port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});