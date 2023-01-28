import { Role } from '@roles/entities/Role';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';

type CreateRoleDTO = {
  name: string;
};

/**
 * UseCase é uma classe que irá definir e validar as regras de negócio, usadas pelos Controllers.
 * É o UseCase que irá chamar o repositório.
 */
export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);

    if (roleAlreadyExists) {
      throw new AppError('Role already exists!');
    }

    return this.rolesRepository.create({ name });
  }
}
