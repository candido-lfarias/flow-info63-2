const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/isadora-gularte', async (req, res) => {
  const fs = require('fs') .promisses
  const arquivo = await fs.readFile('isadora-gularte.txt', 'utf8');
  res.json(arquivo)
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});