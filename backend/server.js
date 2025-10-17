import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
