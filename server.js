const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/fabio-6385601', async (req, res) => {
  const fs = require('fs').promises;

  try {
    const data = await fs.readFile('fabio-6385601.txt', 'utf-8');
    res.json(data);
  } catch (error) {
    console.error('Error reading the file:', error);
    res.status(500).json({ error: 'Failed to read the file' });
  }
});




app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});