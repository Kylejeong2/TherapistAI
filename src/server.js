require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000; // Choose an appropriate port

app.use(express.json());

// Replace 'YOUR_OPENAI_API_KEY' with your actual API key
const API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const chatbotResponse = await axios.post(
      OPENAI_API_URL,
      {
        prompt: message,
        max_tokens: 50, // Adjust based on desired response length
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    const chatbotMessage = chatbotResponse.data.choices[0].text;

    res.json({ message: chatbotMessage });
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error);
    res.status(500).json({ error: 'Chatbot error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
