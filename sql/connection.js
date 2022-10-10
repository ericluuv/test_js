const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mysql = require('mysql');

let con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
});

con.connect((err) => {
    if (err) { throw err; }
    console.log("SQL Connected.");
})

module.exports = { connector: con }