const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;
const publicDir = ".";

// middle ware
app.use("/", (req, res, next) => {
  console.log("req: ", req.method, req.url);
  //res.send("Hello World!");
  next();
});

// pour servir des fichiers statics
app.use(express.static(publicDir));

app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
