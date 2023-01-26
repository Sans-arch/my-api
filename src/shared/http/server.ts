import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`🔥 Server is running on port ${process.env.PORT}!`),
);
