// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid input');
    }

    const numbers = [];
    const alphabets = [];
    let highestAlphabet = '';

    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (typeof item === 'string' && item.length === 1) {
        alphabets.push(item);
        if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
          highestAlphabet = item;
        }
      }
    });

    const response = {
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({ is_success: false, error: 'Invalid input' });
  }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});