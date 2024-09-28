const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/?', (req, res) => {
  const { input } = req.body;
  console.log('Received input from frontend:', input);
  
  // You can handle the input here (e.g., save it to a database)
  
  res.status(200).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});