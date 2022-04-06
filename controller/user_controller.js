const table = 'users';
const user = require('../model/user')

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
    },

    register : (conn,body) => {
        return new Promise((resolve,reject) => {
            body = user.vaild(body)
            conn.query(`insert into users (id,password,nickname) values (${body.id},${body.password},${body.nickname})`,
                (err,result,fields) => {
                    if (err){
                        reject(err)
                    } else{
                        resolve(result);

                    }
                }
            )
        });
    }
    
}