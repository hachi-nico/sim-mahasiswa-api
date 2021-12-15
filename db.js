const mysql = require("mysql2");
const dotenv = require("dotenv");

// initialize dotenv
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE,
  multipleStatements: true
});

// initialize mysql connection
db.connect((error) => {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Mysql Connected");
  }
});

module.exports = db;
