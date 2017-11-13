import { Request, Response } from "express";

import { PostModel } from "./post.model";
import { AuthorModel } from "../author/author.model";

export class PostController {

  static async getPosts(req: Request, res: Response, next: ): Promise<void> {
    const posts = await PostModel.find({})
    .populate("author")
    .exec();

    res.send(posts);
  }

  static async createPost(req: Request, res: Response) {
    const data = req.body;
    const author = await AuthorModel.findOne().exec();
    data.author = author._id;
    const post = await PostModel.create(data);

    res.send(post);
  }
}
