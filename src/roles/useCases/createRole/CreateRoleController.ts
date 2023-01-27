import { RolesRepository } from '@roles/repositories/RolesRepository';
import { Request, Response } from 'express';
import { AppError } from '@shared/errors/AppError';

const repository = new RolesRepository();

/**
 * Vai ser responsável por receber os dados da requisição de uma rota
 * Se precisar de verificações das informações em relação com as regras de negócio, ele vai encaminhar isso para um use case.
 */
class CreateRoleController {
  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const roleAlreadyExists = repository.findByName(name);

    if (roleAlreadyExists) {
      throw new AppError('Role already exists!');
    }

    const role = repository.create({ name });

    return response.status(201).json(role);
  }
}

export { CreateRoleController };
