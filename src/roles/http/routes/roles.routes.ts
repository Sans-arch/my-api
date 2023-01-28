import { Router } from 'express';
import { createRolesController } from '@roles/useCases/createRole';
import { RolesRepository } from '@roles/repositories/RolesRepository';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll();

  return response.json(roles);
});

rolesRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  const role = rolesRepository.findByName(id);

  if (!role) {
    return response.status(404).json({ error: 'Role not found!' });
  }

  return response.json(role);
});

export { rolesRouter };
