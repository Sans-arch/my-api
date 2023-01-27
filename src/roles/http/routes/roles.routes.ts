import { Router } from 'express';
import { RolesRepository } from '@roles/repositories/RolesRepository';

const rolesRouter = Router();
const repository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  const { name } = request.body;
  const role = repository.create({ name });

  return response.status(201).json(role);
});

export { rolesRouter };
