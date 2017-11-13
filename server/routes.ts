import * as express from "express";

import { PostRouter } from "./api/post/post.route";
import { AuthorRouter } from "./api/author/author.route";
import { WordRouter } from "./api/word/word.route";
import { ChapterRouter } from "./api/chapter/chapter.route";
import { MyWordRouter } from "./api/myword/myword.route";

export const routes = (app: express.Application): void => {
  // add all routes here
  app.use('/api/authors', AuthorRouter.routes());
  app.use('/api/posts', PostRouter.routes());
  app.use('/api/words', WordRouter.routes());
  app.use('/api/chapters', ChapterRouter.routes());
  app.use('/api/mywords', MyWordRouter.routes());
}
