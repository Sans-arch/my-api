import { Request, Response } from 'express';
import { ListRolesUseCase } from './ListRolesUseCase';

/**
 * Vai ser responsável por receber os dados da requisição de uma rota
 * Se precisar de verificações das informações em relação com as regras de negócio, ele vai encaminhar isso para um use case.
 * Route -> Controller -> UseCase
 * Route <- Controller <- UseCase
 */
class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute();
    return response.json(roles);
  }
}

export { ListRolesController };
