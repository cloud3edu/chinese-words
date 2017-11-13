import { prop, Typegoose, staticMethod, ModelType } from "typegoose";

import { BaseModel } from "../../common/base.model"

export class Author extends BaseModel {
    @prop()
    age: number;

    @prop()
    name: string;

    @prop()
    description?: string;

    @staticMethod
    static updateByAge(this: ModelType<Author>, ageLimit: number, desc: string): Promise<any> {
      return this.where("age")
      .gte(ageLimit)
      .update({
          "$set" : {
              description: desc
          }
      })
      .exec();
    }
}

export const AuthorModel = new Author().generateModel(Author);