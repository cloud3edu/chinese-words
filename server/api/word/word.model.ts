import { prop, plugin, Typegoose } from 'typegoose';

import { BaseModel } from '../../common/base.model';

export class Word extends BaseModel {

  @prop({required: true})
  pinyin: string;

  @prop({required: true})
  word: string;

  @prop({required: true})
  number: number;

}

export const WordModel = new Word().generateModel(Word);