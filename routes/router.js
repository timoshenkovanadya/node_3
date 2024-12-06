const express = require("express");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "top250.json");
const { helpers, checkIsNumber } = require("../helpers");

const filmsRouter = express.Router();

filmsRouter.get("/readall", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    res.send(data);
  });
});

filmsRouter.get("/read", (req, res, next) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return next(new Error("Error of file riding"));
    }
    const { body } = req;
    if (!checkIsNumber(body.id)) {
      return next({ status: 400, message: "id should be number or string" });
    }
    const arrData = JSON.parse(data);
    const curFilm = arrData.find((element) => element.id == body.id);
    if (curFilm) {
      res.send(curFilm);
    } else {
        return next({ status: 404, message: "No film with such id" });
    }
  });
});


module.exports = filmsRouter;
