import mysql from 'mysql2';
import dotenv from 'dotenv';

// initialize dotenv
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE,
});

// initialize mysql connection
db.connect((error) => {
  if (error) {
    return console.log(error);
  } else {
    return console.log('Mysql Connected');
  }
});

export default db;
