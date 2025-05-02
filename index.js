const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sentimentRoute = require('./routes/sentiment');
const chatRoute = require('./routes/chat');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/sentiment', sentimentRoute);
app.use('/api/chat', chatRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
