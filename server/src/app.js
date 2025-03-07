import express, { json } from 'express';

import quackRoutes from './routes/quackRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use('/api/quacks', quackRoutes);
app.use('/api/user', userRoutes);

export default app;
