import { Router } from 'express';
import { createRolesController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRoles';

const rolesRouter = Router();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response);
});

// rolesRouter.get('/:id', (request, response) => {
//   const { id } = request.params;
//   const role = rolesRepository.findByName(id);

//   if (!role) {
//     return response.status(404).json({ error: 'Role not found!' });
//   }

//   return response.json(role);
// });

export { rolesRouter };
