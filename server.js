const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/amanda-6575890', (req, res) => {
  res.json("amanda-6575890.txt");
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});