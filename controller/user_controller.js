const mysql = require('mysql');
const db_connect = require('../db/config');
const db =require("../db/config");
const table = 'users';

var user_id = 1;
// const conn = db_connect.init;
module.exports = {
    getUser : (conn) => {
        return new Promise((resolve,reject) => {
            conn.query(`select * from ${table} where id = ${user_id}`, (err,result,fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    userList : (conn) => {
        return new Promise((resolve,reject) => {
            conn.query(`select * from ${table}`, (err,result,fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}