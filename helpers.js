const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "top250.json");

function readFilms() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {console.log(err)};
    const films = JSON.stringify(data);
    return films;
  });
}

module.exports = {
    readFilms
}
