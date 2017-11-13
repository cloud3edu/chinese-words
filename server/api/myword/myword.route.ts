import { Router } from 'express';
import { MyWordController } from './myword.controller';
import { asyncMiddleware } from '../../util/async.middleware';

export class MyWordRouter {

  static routes(): Router {

    const router = Router();

    router.get('/', asyncMiddleware(MyWordController.getMyWords));
    router.post('/', asyncMiddleware(MyWordController.create));
    router.delete('/:id', asyncMiddleware(MyWordController.delete));

    return router;
  }
}
