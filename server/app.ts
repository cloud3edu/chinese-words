import * as express from "express";

import * as http from "http";
import * as path from "path";

import { APIDocsRouter } from "./routes/swagger";

import { routes } from "./routes";
import { expressSettings } from "./config/express.settings";
import { config } from "./config/environment/config";


const app: express.Application = express();

// config express settings
expressSettings(app);

// set routes
routes(app);

app.use("/api/swagger", new APIDocsRouter().getRouter());
app.use("/docs", express.static(path.join(__dirname, './assets/swagger')));

const server: http.Server = http.createServer(app);
console.log("config is ", config);
server.listen(config.port, '0.0.0.0');

export { server };
