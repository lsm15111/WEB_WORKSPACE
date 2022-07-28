const http = require('http');
const express = require('express');
const { reset } = require('nodemon');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// 새로운 속성 추가
app.set('port',3000);
app.set('views',__dirname + '/views');// 폴더 경로
app.set('view engine', 'ejs');// 확장자

// 미들웨어 추가
app.use(cors());
// __dirname = 전체 경로(C:\WORK_SUNGMIN\js_work_nodejs2022)
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let top = 1;
let phoneList = [
    {pno:top++, name:'iphone10', price:3500, company: 'APPLE', year:2020},
    {pno:top++, name:'galaxy', price:3500, company: 'SAMSUNG', year:2020},
    {pno:top++, name:'iphone11', price:3500, company: 'APPLE', year:2021},
    {pno:top++, name:'wide3', price:3500, company: 'SAMSUNG', year:2022}
];

// 라우트(route) 설정
app.get('/list', (req, res)=> {
    res.send({phoneList});
});

// home 페이지
app.get('/home', (req, res)=> {
    req.app.render('home', {phoneList},(err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});

// ejs 페이지로 forword
app.post('/insert', (req, res)=> {
    let phoneData = {
        pno : top++,
        name : req.body.name,
        price : req.body.price,
        company : req.body.company,
        year : req.body.year
    };
    phoneList.push(phoneData);
    res.send({phoneList});
});

// 삭제 --single home
app.post('/delete/:pno', (req, res)=> {
    let idx = phoneList.findIndex((item)=>{
        console.log(item.pno, req.params.pno);
        return item.pno == Number(req.params.pno);
    });
    console.log(idx);
    phoneList.splice(idx, 1);
});

app.get("/input", (req, res)=>{
    req.app.render('input', {phoneList}, (err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});

// input 데이터 처리
app.post('/input', (req, res)=> {
    let phoneData = {
        pno : top++,
        name : req.body.name,
        price : req.body.price,
        company : req.body.company,
        year : req.body.year
    };
    phoneList.push(phoneData);
    res.redirect('/home');
});
// 디테일 get 페이지
app.get('/detail/:pno', (req, res)=> {
    let idx = phoneList.findIndex((item)=>{
        return item.pno == Number(req.params.pno);
    });

    let data = phoneList[idx];
    req.app.render('detail', {data},(err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});
//수정 get 페이지
app.get('/modify/:pno', (req, res)=> {
    let idx = phoneList.findIndex((item)=>{
        return item.pno == Number(req.params.pno);
    });
    let data = phoneList[idx];
    req.app.render('modify', {data},(err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});
//수정 데이터 처리
app.post('/modify', (req, res)=> {
    let phoneData = {
        pno : top++,
        name : req.body.name,
        price : req.body.price,
        company : req.body.company,
        year : req.body.year
    };
    
    let idx = phoneList.findIndex((item)=>{
        console.log(item.pno, req.body.pno);
        return item.pno == Number(req.body.pno);
    });
    phoneList[idx] = (phoneData);
    res.redirect('/home');
});
//삭제 get 페이지
app.get('/delete/:pno', (req, res)=> {
    let idx = phoneList.findIndex((item)=>{
        console.log(item.pno, req.params.pno);
        return item.pno == Number(req.params.pno);
    });
    console.log(idx);
    phoneList.splice(idx, 1);
    res.redirect('/home');
});

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('서버 실행 중 : http://localhost:3000');
});
