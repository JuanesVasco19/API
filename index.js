import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
  res.send('Adios Mundo Cruel!');
});
 app.get('/api', (req, res) => {
  res.json({ message: 'Entraste a la Ruta API ... ' });
    res.json({ message: 'Bienvenido!' });
  });

