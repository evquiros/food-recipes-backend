require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./mongo')
const recipesRouter = require('./routes/recipes')

const app = express()
connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/recipes', recipesRouter)

// Error handling and routes not found
app.use((req, res) => res.status(404).send('Ruta no encontrada'));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));