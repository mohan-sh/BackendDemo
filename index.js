
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json()); // Parse JSON before routes
app.use('/api/user', router);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
