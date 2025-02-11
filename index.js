const express = require("express");
const app = express();

const filmsRouter = require("./routes/router");
app.use(express.json());

app.use("/api/films", filmsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Running");
});
