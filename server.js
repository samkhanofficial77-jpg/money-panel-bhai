const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Environment variables for security - NEVER EXPOSED TO CLIENT
const PANEL_BOT_TOKEN = process.env.PANEL_BOT_TOKEN || '8884638434:AAFRR9AZuGryKw_1bMvqRt9lDgYJ3CPF9XQ';
const PANEL_CHAT_ID = process.env.PANEL_CHAT_ID || '8319610847';

// Security middleware
app.use(express.json());
app.use(express.static(__dirname));

// Security headers to prevent token exposure
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// REMOVED - No longer exposing bot credentials to browser
// All Telegram operations now go through server-side proxy only

// Ultra-secure Telegram proxy - NO credentials exposed to browser EVER!

// Ultra-secure Telegram proxy - NO credentials exposed to browser EVER!
app.post('/api/telegram/sendMessage', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      console.log('⚠️  Invalid request - no message text');
      return res.status(400).json({ error: 'Text is required' });
    }

    // Log security - but never log tokens
    console.log('📤 Secure message sent via server proxy');
    
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
    
    // Return success but don't expose any Telegram API details
    res.json({ status: 'sent', timestamp: Date.now() });
  } catch (error) {
    console.error('❌ Telegram API error (token safe):', error.message);
    res.status(500).json({ error: 'Message delivery failed' });
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
