const table = 'users';
const user = require('../model/user')

var user_id = 1;
// const conn = db_connect.init;
module.exports = {
    //마이페이지용
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
    //유저 전체 리스트 확인
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
    //유저 등록
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