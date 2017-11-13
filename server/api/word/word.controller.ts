import { Request, Response } from 'express';
import { WordModel } from './word.model';


export class WordController {

  static async getWords(req: Request, res: Response): Promise<void> {
    const paginateOpts = {
      page: ~~req.query.from ,
      limit: ~~req.query.limit,
      sort: 'number'
    }

    const words = await WordModel.find()
      .skip(paginateOpts.page)
      .limit(paginateOpts.limit)
      .sort(paginateOpts.sort)
      .exec();

    res.send(words);
  }
}
