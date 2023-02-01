import { DataSource } from 'typeorm';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [],
});
