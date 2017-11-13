import { Router } from "express";
import { AuthorModel } from "./author.model";
import { AuthorController } from "./author.controller";
import { asyncMiddleware } from '../../util/async.middleware';

export class AuthorRouter {

  static routes(): Router {

    const router = Router();

    /**
     * @swagger
     * /api/author:
     *   get:
     *     tags:
     *      - Author
     *     description:
     *      List of all authors registered in system.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Authors
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    router.get("/", asyncMiddleware(AuthorController.getAuthors));

    /**
     * @swagger
     * /api/author:
     *   post:
     *     tags:
     *      - Author
     *     description:
     *      Create new author.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Author
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    router.post("/", AuthorController.createAuthor);

    return router;
  }
}
