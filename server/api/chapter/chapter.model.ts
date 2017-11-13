import { prop, Typegoose } from 'typegoose';

import { BaseModel } from '../../common/base.model';

export class Chapter extends BaseModel {

  @prop({required: true})
  name: string;

  @prop({required: true})
  number: number;
}

export const ChapterModel = new Chapter().generateModel(Chapter);
