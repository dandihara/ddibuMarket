const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router')
const app = express();
// 로그인 , 거래내역, 마이페이지
//json 이용하기 위한 코드 추가 > ver 4.16이상부터 사용 가능.
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/' , function(req,res) {
    res.send('this is home dicrectory')
})

app.post("/register", function(req,res){
    router.register(req,res)
})
