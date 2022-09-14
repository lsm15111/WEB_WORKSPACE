const express = require('express');

const app = express();
app.use(express.static('sub'));
app.get('/',(req, res)=>{
    res.redirect('/home.html')
})
app.listen(3003,() =>{
    console.log('3003에서 서버가 시작되었습니다.')
})