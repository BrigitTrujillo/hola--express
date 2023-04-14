const express = require('express');
const app = express();

const PORT = 5000;

const clientes = [
  {
    id: 1,
    nombre: "Brigit",
    direccion: "san jose",
    telefono: "11111511"
  },
  {
    id: 2,
    nombre: "Yanela",
    direccion: "Santa anita",
    telefono: "22222222"
  },
  {
    id: 3,
    nombre: "Diego",
    direccion: "San miguel",
    telefono: "33333333"
  }
];

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    marca: "MarcaDell",
    precio: "10.00"
  },
  {
    id: 2,
    nombre: "Maus",
    marca: "Dell",
    precio: "20.00"
  },
  {
    id: 3,
    nombre: "Monitor",
    marca: "aoc",
    precio: "30.00"
  }
];

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express -Brigit Trujillo Flores!');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
