import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();
console.log('Loaded OpenAI key:', process.env.OPENAI_API_KEY?.slice(0, 10) || 'NOT FOUND');

const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
     model: 'gpt-4.1',
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('🛑 OpenAI error:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
    });
    res.status(500).json({
      error: 'Failed to connect to OpenAI API',
      details: error.response?.data || error.message,
    });
  }

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Proxy server running on port ${PORT}`));