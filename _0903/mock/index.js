const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 自訂 CORS 中間件
app.use(cors());
//app.use(cors({
//    origin: 'http://localhost:5500', // 允許的前端來源(前端測cookie 要這樣寫)
//    credentials: true               // 允許攜帶憑證（如 Cookie）
//}));

app.get('/', (req, res) => {
    let a = req.query
    console.log(a,"a")
    res.json({a:1});
});
app.get('/load', (req, res) => {
    res.json([
				{
						"custNo": "CUS0000794582",
						"notifyType": ["SMS","APP"],
						"nameChn": "研發"
				},
        {
						"custNo": "CUS0000794444",
						"notifyType": ["CUSTOM"],
						"nameChn": "測試"
				},
		]);
});
app.post('/save', (req, res) => {
	console.log(req.body,"req.body");
	res.json({
		result:"ok"
	})
})

app.get('/cookie', (req, res) => {
    // 讀取請求中的 Cookie
    console.log('Cookies:', req.headers.cookie);
    res.json({ message: 'Cookie received' });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
