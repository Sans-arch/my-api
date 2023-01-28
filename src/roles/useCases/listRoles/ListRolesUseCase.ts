import { Role } from '@roles/entities/Role';
import { RolesRepository } from '@roles/repositories/RolesRepository';

/**
 * UseCase é uma classe que irá definir e validar as regras de negócio, usadas pelos Controllers.
 * É o UseCase que irá chamar o repositório.
 */
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
