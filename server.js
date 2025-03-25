const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/isadora-gularte', (req, res) => {
  res.json('isadora-gularte.txt');
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});