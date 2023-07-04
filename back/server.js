console.log("About to start a server ...");
var express = require("express");
var serveIndex = require("serve-index");
var app = express();
var port = 3000;
var publicDir = ".";
// middle ware
app.use("/", function (req, res, next) {
    console.log("req: ", req.method, req.url);
    next();
});
// pour servir des fichiers statics
app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
