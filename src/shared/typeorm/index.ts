import { DataSource } from 'typeorm';
import { CreateRolesTable1675374241711 } from './migrations/1675374241711-CreateRolesTable';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1675374241711],
});
