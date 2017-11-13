import { Router } from 'express';
import { WordController } from './word.controller';
import { asyncMiddleware } from '../../util/async.middleware';

export class WordRouter {

  static routes(): Router {
    const router = Router();

    router.get("/", asyncMiddleware(WordController.getWords));

    return router;
  }
}
