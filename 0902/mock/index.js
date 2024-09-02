const express = require('express');
const app = express();
const port = 3000;

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

app.get('/', (req, res) => {
    setTimeout(function(){
        res.json({
            test2: [1,2,3]
        });
        res.end()
    },1000)
});
app.get('/a1', (req, res) => {
    setTimeout(function(){
        res.json({
            test2: "a1"
        });
        res.end()
    },1000)
});
app.get('/a2', (req, res) => {
    setTimeout(function(){
        res.status(200).json({
            test2: "a2"
        });
        res.end()
    },1000)
});
app.get('/a3', (req, res) => {
    setTimeout(function(){
        res.json({
            test2: "a3"
        });
        res.end()
    },1000)
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
