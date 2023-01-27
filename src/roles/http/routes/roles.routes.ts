import { Router } from 'express';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController';

const rolesRouter = Router();
const repository = new RolesRepository();
const createRolesController = new CreateRoleController();

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
  return createRolesController.handle(request, response);
});

export { rolesRouter };
