const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.get("/api/quotes/random", (req, res, next) => {
  res.send({ quote: getRandomElement(quotes) });
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
