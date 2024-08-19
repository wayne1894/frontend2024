const express = require('express');
const app = express();
const port = 3000;

// 使用內建的 middleware 來解析 JSON 以及 urlencoded 表單資料
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 處理 POST 請求的路由
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    console.log(name,"name");
    console.log(email,"email");
    
    res.send(`submit success : Name - ${name}, Email - ${email}`);
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
