import express, { json } from 'express';
import pkg from 'mongoose';
const { connect } = pkg;
import quackRoutes from './routes/quackRoutes.js';
import userRoutes from './routes/userRoutes.js';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());
connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/quacks', quackRoutes);
app.use('/api/user', userRoutes);

export default app;
