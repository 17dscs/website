const express = require("express");
const path = require("path");

const PORT = 80;
const app = express();
console.log(path.join(__dirname, "build"));
app.use("/website", express.static(path.join(__dirname, "build"))); // prod

app.get("/", (req, res) => {
  res.redirect("/website");
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
