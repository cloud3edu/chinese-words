import mockgoose = require("mockgoose");
import mongoose = require("mongoose");
import { config } from "./environment/config";

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === "testing") {
    mockgoose(mongoose).then((): void => {
      mongoose.connect("mongodb://example.com/TestingDB", config.mongodb.options);
    });
} else {
  console.log("Try to connect mongodb...")
  mongoose.connect(config.mongodb.uri, config.mongodb.options);
}

export { mongoose };
