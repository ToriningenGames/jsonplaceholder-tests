const express = require("express");
const app = express();

const PORT = 8080;
const posts = require("./posts");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/posts/", posts);

app.listen(PORT);

module.exports = app;

