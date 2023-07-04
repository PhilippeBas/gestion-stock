console.log("About to start a server ...");

import express, { NextFunction, Request, Response } from "express";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;
const publicDir = ".";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("req: ", req.method, req.url);
  next();
};

//! middleware
app.use(logger);

//* Il va gérer tous les routes qui commence par api : donc c'est un routeur
app.use("/api", api);

//  ! pour servir des fichiers statics

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
