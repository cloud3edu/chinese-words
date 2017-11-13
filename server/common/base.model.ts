import { prop, Typegoose, InstanceType } from "typegoose";
import { mongoose } from "../config/database";

export class BaseModel extends Typegoose {

  @prop()
  createdBy: string;

  generateModel (t: Function): mongoose.Model<InstanceType<this>> & this {
    console.log("Type of t is ", typeof t);
    return super.getModelForClass(t, {
      existingMongoose: mongoose,
      schemaOptions: {
          timestamps: true
      }
    });
  }
}