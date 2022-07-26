const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

// public 폴더 static 설정
app.use(express.static('public'));

app.get("/", (req, res)=> {
    res.end("<h1> hello world</h1>");
});

app.get("/list", (req, res)=> {
    res.end("<h1> list~</h1>");
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000");
});