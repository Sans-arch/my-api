import { Router } from 'express';
import { RolesRepository } from '@roles/repositories/RolesRepository';

const rolesRouter = Router();
const repository = new RolesRepository();

rolesRouter.get('/', (request, response) => {
  const roles = repository.findAll();

  return response.json(roles);
});

rolesRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  const role = repository.findByName(id);

  if (!role) {
    return response.status(404).json({ error: 'Role not found!' });
  }

  return response.json(role);
});

rolesRouter.post('/', (request, response) => {
  const { name } = request.body;
  const roleAlreadyExists = repository.findByName(name);

  if (roleAlreadyExists) {
    return response.status(400).json({ error: 'Role already exists!' });
  }

  const role = repository.create({ name });

  return response.status(201).json(role);
});

export { rolesRouter };
