const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/bruno-6575869', (req, res) => {
  //ler conteúdo do arquivo
  res.json('bruno-6575859.txt');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});