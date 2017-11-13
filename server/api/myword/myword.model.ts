import { prop, Typegoose, Ref } from 'typegoose';
import { BaseModel } from '../../common/base.model';
import { Word } from '../word/word.model';

export class MyWord extends BaseModel {

  @prop({ref: Word, required: true})
  word: Ref<Word>;

}

export const MyWordModel = new MyWord().generateModel(MyWord);
