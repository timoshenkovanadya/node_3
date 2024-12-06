const express = require("express");
const app = express();


const filmsRouter = require("./routes/router");
app.use(express.json());

app.use("/api/films", filmsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Running");
});
