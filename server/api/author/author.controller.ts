import { Request, Response } from "express";

import { AuthorModel } from "./author.model";

export class AuthorController {

  static async getAuthors(req: Request, res: Response): Promise<void> {
    const authors = await AuthorModel.find({}).exec();
    console.log("Authors are ", authors);
    res.send(authors);
  }

  static async createAuthor(req: Request, res: Response): Promise<void> {
    const author = await AuthorModel.create(req.body);
    res.send(author);
  }

}