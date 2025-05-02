import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const userId = '123';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        userId,
        message: input
      });

      const botReply = { sender: 'bot', text: res.data.botResponse };
      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error contacting bot.' }]);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender}>{msg.text}</div>
        ))}
      </div>
      <div className="input-area">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
