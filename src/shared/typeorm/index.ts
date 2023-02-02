import { DataSource } from 'typeorm';
import { CreateRolesTable1675374241711 } from './migrations/1675374241711-CreateRolesTable';
import { Role } from '@roles/entities/Role';

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1675374241711],
});
