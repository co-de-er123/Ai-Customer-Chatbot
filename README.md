# AI-Enhanced Customer Service Chatbot with Sentiment Analysis

This project is a full-stack AI-powered customer service chatbot that uses sentiment analysis to detect user emotions, provide intelligent responses, escalate conversations to human agents if necessary, and personalize support using CRM data.

## 🚀 Features
- 🎯 Real-time chat interface with React
- 📊 Sentiment analysis with the `sentiment` package
- 🤖 AI-driven escalation based on user frustration
- 👤 CRM integration for personalized responses
- 🌐 RESTful APIs built with Express.js
- 🐳 Dockerized for containerized deployment

## 🧠 Tech Stack
- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Sentiment Analysis**: `sentiment` npm package
- **CRM Integration**: Mocked in-memory data
- **Containerization**: Docker, Docker Compose

## 📁 Project Structure
```
.
├── client             
│   └── src
│       └── App.js     
│       └── App.css
├── server             
│   └── routes
│       └── chat.js    
│       └── sentiment.js
│   └── index.js       
├── docker-compose.yml
├── Dockerfile.client
├── Dockerfile.server
```

## 🛠️ Setup Instructions (Local)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-chatbot-sentiment.git
cd ai-chatbot-sentiment
```

### 2. Start the Backend
```bash
cd server
npm install
node index.js
```
Backend will run on `http://localhost:5000`

### 3. Start the Frontend
```bash
cd ../client
npm install
npm start
```
Frontend will run on `http://localhost:3000`

## 🐳 Docker Setup

### 1. Docker Compose
Ensure Docker is installed, then from project root:
```bash
docker-compose up --build
```

### 2. Dockerfiles

**`Dockerfile.server`** (in root directory)
```Dockerfile
FROM node:18
WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server .
EXPOSE 5000
CMD ["node", "index.js"]
```

**`Dockerfile.client`** (in root directory)
```Dockerfile
FROM node:18
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client .
EXPOSE 3000
CMD ["npm", "start"]
```

**`docker-compose.yml`** (in root directory)
```yaml
version: '3'
services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile.server
    ports:
      - "5000:5000"

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.client
    ports:
      - "3000:3000"
    depends_on:
      - backend
```

## ☁️ Deployment

### Frontend (Vercel)
1. Push the `client` folder to a GitHub repo.
2. Connect your GitHub repo on [vercel.com](https://vercel.com/).
3. Set the root directory to `client` and deploy.

### Backend (Render)
1. Push the `server` folder to a GitHub repo.
2. Go to [render.com](https://render.com/) and create a new Web Service.
3. Connect your repo and set:
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Port**: `5000`

## 📬 API Endpoints

### `POST /api/chat`
```json
{
  "userId": "123",
  "message": "I'm really frustrated right now."
}
```
**Response**
```json
{
  "botResponse": "I'm sorry, Amruth. I'm escalating this to a human agent.",
  "sentimentScore": -4,
  "escalate": true
}
```

### `POST /api/sentiment`
```json
{
  "message": "This is amazing!"
}
```
**Response**
```json
{
  "score": 3,
  "comparative": 0.75
}
```

## 🙌 Acknowledgments
- [Sentiment NPM Package](https://www.npmjs.com/package/sentiment)
- OpenAI for the AI project inspiration ✨

---

📣 For contributions, feel free to fork, star ⭐, and submit PRs.

MIT License © 2025 Amruth P S
