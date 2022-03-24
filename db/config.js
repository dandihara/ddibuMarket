const mysql = require('mysql');

const db_info = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port : '3306',
    password : '0000',
    database : 'ddibu-db'
});

const db_connect = {
    init : () => {
        const db = mysql.createConnection(db_info);
        return db
    },
    opne : (con) => {
        con.connect( (err) => {
            if(err){
                console.log(err)
            }
            else{
                console.log("mysql is connected!")
            }
        });
    }
}

module.exports = db_connect;