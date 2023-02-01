import 'dotenv/config';
import 'reflect-metadata';
import { app } from './app';
import { sqliteDataSource } from '../typeorm';

// Iniciando uma conexão com o banco
sqliteDataSource
  .initialize()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`🔥 Server is running on port ${process.env.PORT}!`),
    );
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
