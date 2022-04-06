const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session')
const router = require('./controller/user_controller')
const app = express();
//json 이용하기 위한 코드 추가 > ver 4.16이상부터 사용 가능.
app.use(express.json())
app.use(express.urlencoded({ extends: true }))


const FileStore = require('session-file-store')(session);
//session setting
app.use(session({
    secret : 'keyboard cat', //session 암호화
    resave : false, // session 항상 저장할지 여부 정하는
    saveUninitialized : true, //초기화되지 않은채 스토어에 저장되는 세션
    store : new FileStore() // 데이터 저장 방식
}));

//session에 접근하려면 req.session 사용

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/' , function(req,res) {
    res.send('this is home dicrectory')
    if(!req.session.num) {
        req.session.num = 1;
    }else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Number : ${req.session.num}`);
})

app.post("/register", function(req,res){
    router.register(req,res)
})
