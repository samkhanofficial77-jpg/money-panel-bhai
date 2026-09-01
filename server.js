const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

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
