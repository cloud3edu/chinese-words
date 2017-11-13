import { Router } from "express";
import { PostController } from "./post.controller";
import { asyncMiddleware } from '../../util/async.middleware';

export class PostRouter {

  static routes(): Router {

    const router = Router();

    router.get("/", asyncMiddleware(PostController.getPosts));
    router.post("/", asyncMiddleware(PostController.createPost));

    return router;
  }
}
