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
    let a = req.query;
    console.log(a,"a");
    res.status(200).json({
        test2: [1,2,3]
    });
    res.end()
});

app.post("/form",(req,res)=>{
    console.log(req.body,"req.body");
    console.log(req.get('Content-Type'));
    res.status(200).json({
        result : "success"
    })
    res.end()
})

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
