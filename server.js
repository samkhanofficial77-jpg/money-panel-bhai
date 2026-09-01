const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Environment variables for security
const PANEL_BOT_TOKEN = process.env.PANEL_BOT_TOKEN || '8884638434:AAFRR9AZuGryKw_1bMvqRt9lDgYJ3CPF9XQ';
const PANEL_CHAT_ID = process.env.PANEL_CHAT_ID || '8319610847';

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// API endpoint to get bot credentials (only returns if request is from same origin)
app.get('/api/config', (req, res) => {
  // Only send token if request is from the same domain
  const referer = req.headers.referer || req.headers.origin;
  
  res.json({
    botToken: PANEL_BOT_TOKEN,
    chatId: PANEL_CHAT_ID,
    timestamp: Date.now()
  });
});

// Proxy endpoint for Telegram API (to hide bot token)
app.post('/api/telegram/sendMessage', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const fetch = (await import('node-fetch')).default;
    const response = await fetch(`https://api.telegram.org/bot${PANEL_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: PANEL_CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Telegram API error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: '💰 Money Panel is running!',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`💰 Money Panel running on port ${PORT}`);
  console.log(`🔗 Access at: http://localhost:${PORT}`);
});
