const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/memo', function(req, res){
    console.log("GET - /memo");
    let title = req.query.title;
    let name = req.query.name;
    let content = req.query.content;
    
    let memoData ={title,name,content};
    res.send(memoData);
    
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log("서버 실행 중>>> http://localhost:3000");
});

