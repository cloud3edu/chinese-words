import { Router } from 'express';
import { ChapterController } from './chapter.controller';
import { asyncMiddleware } from '../../util/async.middleware';

export class ChapterRouter {

  static routes(): Router {
    const router = Router();

    router.get('/', asyncMiddleware(ChapterController.getChapters));
    return router;
  }
}
