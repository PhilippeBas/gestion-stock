const express = require("express");
const app = express();
const port = 3000;

// middle ware
app.use("/", (req, res, next) => {
  console.log("req: ", req.method, req.url);
  //res.send("Hello World!");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
