import { Request, Response } from 'express';
import { CreateRoleUseCase } from './CreateRoleUseCase';

/**
 * Vai ser responsável por receber os dados da requisição de uma rota
 * Se precisar de verificações das informações em relação com as regras de negócio, ele vai encaminhar isso para um use case.
 * Route -> Controller -> UseCase
 * Route <- Controller <- UseCase
 */
class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute({ name });

    return response.status(201).json(role);
  }
}

export { CreateRoleController };
