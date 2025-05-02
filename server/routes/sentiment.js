const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

router.post('/', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const result = sentiment.analyze(message);
  res.json({ score: result.score, comparative: result.comparative });
});

module.exports = router;
