import * as path from "path";
import * as _ from "lodash";

// common configures
let common = {
  appName: "my-app",

  root: path.normalize(__dirname + "/../../.."),

  mongodb: {
    options: {
      useMongoClient: true,
      db: {
        safe: true
      }
    }
  }
}

// merge common configures and environment specific configures
export const config = _.merge(common, require("./" + process.env.NODE_ENV).config);
