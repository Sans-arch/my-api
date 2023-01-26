import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Olá Dev!' });
});

export { router };
