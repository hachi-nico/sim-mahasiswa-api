const dotenv = require("dotenv");
const express = require("express");
const bodyparser = require("body-parser");

// initialize dotenv
dotenv.config();

//initialize express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./router"));

app.listen(process.env.PORT, () =>
  console.log(`server run on port ${process.env.PORT}`)
);
