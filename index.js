const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); 

// Route for summarizing text using Hugging Face API
app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for summarization.' });
  }

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      { headers: { Authorization: 'Bearer ' + process.env['ACCESS_TOKEN'] } }
    );

    const summary = response.data[0].summary_text;
    res.json({ summary });
  } catch (error) {
    console.error("Error calling Hugging Face API:", error.message);
    res.status(500).json({ error: 'Failed to summarize text.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
