const express = require("express");
const tokens = require("./routes/tokens.js");
const app = express();
const port = 5000;

app.use("/tokens", tokens);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
