import { Request, Response } from 'express';

import { MyWordModel } from './myword.model';
import { Word } from '../word/word.model';

export class MyWordController {

  static async getMyWords(req: Request, res: Response): Promise<void> {

    const mywords = await MyWordModel.find()
    .populate('word')
    .exec();

    // sort mywords based on word's number
    const sorted = mywords.sort((a,b) => (a.word as Word).number - (b.word as Word).number)
    res.send(sorted);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const data = req.body;

    //check if word is already added
    const existWord = await MyWordModel.findOne({word: data.word}).exec();
    if(existWord === null) {
      const result = await MyWordModel.create(data);
      res.send(result);
    } else {
      console.log("Already exist");
      res.send(existWord);
    }

  }

  static async delete(req: Request, res: Response): Promise<void> {
    const conditions = { word : req.params.id };
    const result = await MyWordModel.remove(conditions);

    res.send(result);
  }
}
