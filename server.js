const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/bruno-6575869', async (req, res) => {
  const fs = require('fs').promises;
  const data = await fs.readFile('bruno-6575869.txt', 'utf8');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
