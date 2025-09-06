const http = require('http');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from CI/CD Demo!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
