require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
console.log('Conexión MongoDB:', process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema y modelo de usuario con campo role
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },  // default user, puede ser 'admin'
});

const User = mongoose.model('User', userSchema);

// Ruta registro (opcional para crear usuarios)
app.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;  // recibimos role desde el frontend si lo envían

    // Verificar si existe usuario
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Usuario ya existe' });

    // Hashear contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Si no se envía role, será 'user' por defecto
    const newUser = new User({ email, password: hashedPassword, role: role || 'user' });
    await newUser.save();

    res.status(201).json({ message: 'Usuario creado' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

    // Enviamos role también
    res.json({ message: 'Login exitoso', userId: user._id, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});