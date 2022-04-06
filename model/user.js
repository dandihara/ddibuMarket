//validation 처리 & password 암호화(bcrpyt)
const bcypt = require('bcrypt')
module.exports = {
    vaild : (body) => {
        //regex 로 처리 ?
        body.password = bcypt.hash(body.password)
    }
}