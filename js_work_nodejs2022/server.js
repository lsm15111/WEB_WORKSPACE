const http = require('http');
const express = require('express');
const { reset } = require('nodemon');
const app = express();
const cors = require('cors');

// 새로운 속성 추가
app.set('port',3000);
app.set('views',__dirname + '/views');// 폴더 경로
app.set('view engine', 'ejs');// 확장자

// 미들웨어 추가
app.use(cors());
// __dirname = 전체 경로(C:\WORK_SUNGMIN\js_work_nodejs2022)
app.use(express.static(__dirname + '/public'));

let phoneList = [
    {pno:1, name:'iphone10', price:3500, company: 'APPLE', year:2020},
    {pno:2, name:'galaxy', price:3500, company: 'SAMSUNG', year:2020},
    {pno:3, name:'iphone11', price:3500, company: 'APPLE', year:2021},
    {pno:4, name:'wide3', price:3500, company: 'SAMSUNG', year:2022}
];

// 라우트(route) 설정
app.get('/', (req, res)=> {
    res.send('Hello World!');//문자열
    reset.end('<h1>Hello World!</h1>');//객체
});


app.get('/home', (req, res)=> {
    req.app.render('home', {phoneList},(err, data)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});


const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('서버 실행 중 : http://localhost:3000');
});
