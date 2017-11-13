import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as path from 'path';
import { config } from './environment/config';

export const expressSettings = (app: express.Application): void => {

  app.use(urlencoded({
    extended: true
  }));
  app.use(json());

  app.use('/', express.static(__dirname + '/../../client/src'));
  app.use('/node_modules', express.static(__dirname + '/../../node_modules'));

  app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    console.log(err);
    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
  });



}
