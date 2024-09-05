const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
