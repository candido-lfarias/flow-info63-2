const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/pedro-hpdoliveira6', async (req, res) => {
  const fs = require('fs').promises;
  const data = await fs.readFile('pedro-hpdoliveira6.txt', 'utf8');
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});