import { Request, Response } from 'express';

import { ChapterModel } from './chapter.model';

export class ChapterController {

  static async getChapters(req: Request, res: Response): Promise<void> {

    const chapters = await ChapterModel.find()
    .sort('number')
    .exec();

    res.send(chapters);
  }
}
