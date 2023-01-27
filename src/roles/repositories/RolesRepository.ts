import { Role } from '@roles/entities/Role';

type CreateRoleDTO = {
  name: string;
};

// Classe responsável por fazer toda a MANIPULAÇÃO de dados de uma Entidade
export class RolesRepository {
  private roles: Role[];

  constructor() {
    this.roles = [];
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }
}
