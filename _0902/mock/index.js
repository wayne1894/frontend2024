const express = require('express');
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');

// cookieParser middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 自訂 CORS 中間件
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 允許來自所有來源的請求
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // 允許的 HTTP 方法
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允許的標頭
  
    // 如果是 OPTIONS 請求，直接回應成功
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    // 繼續處理請求
    next();
});
app.get("/cookie",(req,res)=>{
    res.set({
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Credentials': true
    });

    const cookies = req.headers.cookie;
    console.log('Cookies:', cookies); // Cookies 是原始的字符串格式
    res.json({c:33})
})
app.get('/', (req, res) => {
    let a = req.query
    console.log(a,"a")
    res.json({a:1});
});
app.get('/a1', (req, res) => {
    let a = req.query
    console.log(a,"a")
    setTimeout(function(){
        res.json({a:2});
    },0)
});
app.get('/a2', (req, res) => {
    let a = req.query
    console.log(a,"a")
    setTimeout(function(){
        res.json({a:3});
    },0)
});
app.get('/a3', (req, res) => {
    let a = req.query
    console.log(a,"a")
    setTimeout(function(){
        res.json({a:4});
    },0)
});
app.get('/a4', (req, res) => {
    let a = req.query
    console.log(a,"a")
    setTimeout(function(){
        res.json({a:5});
    },0)
});


// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
