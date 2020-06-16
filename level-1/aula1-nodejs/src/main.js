const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response) => {
  return response.json({ message: "Hello, world!" })
});

app.post('/projects', (request, response) => {
  const data = request.body;
  return response.json(data)
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ id })
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ id })
});

app.listen(3333, () => {
  console.log('> Servidor Iniciado! 🚀');
});