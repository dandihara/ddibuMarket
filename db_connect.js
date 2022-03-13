// raw query (저수준 쿼리)
// pooling을 수동으로 관리하며 세부적으로 개발자가 조정가능.

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '0000',
    database : 'ddibu-db'
});

connection.connect();
connection.query('SELECT * FROM market_board',fuction (error,results,fields){
    if (error) throw error;
    console.log(result[0].solution);
});

connection.end();