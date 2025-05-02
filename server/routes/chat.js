const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

// Mock CRM user data
const crmData = {
  '123': { name: 'Amruth', preferences: ['tech', 'support'], lastInteraction: '2024-12-01' }
};

router.post('/', (req, res) => {
  const { userId, message } = req.body;
  if (!userId || !message) return res.status(400).json({ error: 'userId and message are required' });

  const user = crmData[userId] || { name: 'Customer' };
  const analysis = sentiment.analyze(message);

  // Escalate if sentiment score is negative
  const escalate = analysis.score < -2;

  // Personalized response using CRM data
  const response = escalate
    ? `I'm sorry, ${user.name}. I'm escalating this to a human agent.`
    : `Hi ${user.name}, how can I help you with your ${user.preferences[0]} issue today?`;

  res.json({
    userId,
    message,
    botResponse: response,
    sentimentScore: analysis.score,
    escalate
  });
});

module.exports = router;
