
const mysql = require('mysql');
const db_info = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port : '3306',
    password : '0000',
    database : 'ddibu-db'
});
const db = mysql.createConnection(db_info);

db.connect();
module.exports = db;

connection.end();