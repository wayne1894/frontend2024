const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 自訂 CORS 中間件
app.use(cors());

app.get('/', (req, res) => {
    let a = req.query
    console.log(a,"a")
    res.json({a:1});
});
app.get('/load', (req, res) => {
    res.json([
        {
            "custNo": "CUS0000794582",
            "notifyType": ["LINE", "APP"],
            "nameChn": "王小明"
        },
        {
            "custNo": "CUS0000794444",
            "notifyType": ["CUSTOM"],
            "nameChn": "測試"
        },
    ]);
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
