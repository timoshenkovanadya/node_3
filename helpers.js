const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "top250.json");

function checkIsNumber(id) {
    return id && (typeof id === 'string' || typeof id === 'number');
}

module.exports = {
    checkIsNumber
}
