import { prop, Typegoose, Ref, staticMethod, ModelType} from 'typegoose';

import { BaseModel } from "../../common/base.model";
import { Author } from "../author/author.model";


export class Post extends BaseModel {

    @prop()
    title: string;

    @prop({ref: Author, required: true})
    author: Ref<Author>;

    @prop()
    description?: string;

    @staticMethod
    static findAllByAuthor(this: ModelType<Post>, author: string): Promise<any> {
        return this.find({author: author})
        .lean()
        .exec()
    }
}

export const PostModel = new Post().generateModel(Post); 