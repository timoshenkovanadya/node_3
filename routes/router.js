const express = require('express');
const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, '..', 'top250.json');

const filmsRouter = express.Router();

filmsRouter.get('/readall', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err)
        }
       res.send(data); 
    })
    
})

module.exports = filmsRouter