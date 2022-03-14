const { Router } = require("express");
const db = require('./db/config')
const bcrypt = require('bcrypt') // 비밀번호 암호화
const saltRounds = 10 // 암호화 반복 횟수. 10 => 2^10번

Router.post('/register', (req,res,next) => {
    const param = [req.body.id,req.body.password,req.body.nickname]
    bcrypt.hash(param[1],saltRounds,(err,hash) => {
        param[1] = hash
        db.query('INSERT INTO users(`id`,`password`,`nickname`) VALUES (?,?,?)', param, (err,row) => {
        if (err) console.log(err)
        })
    })
    
    res.end()
})
