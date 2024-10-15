const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 自訂 CORS 中間件
app.use(cors());

// 定義檔案存放目錄
const balanceFilePath = './balance.txt';
const ordersDirectory = './orders';
const cycleFilePath = './cycle.txt';

//餘額
const readBalance = () => {
    return new Promise((resolve, reject) => {
        // 檢查檔案是否存在
        if (!fs.existsSync(balanceFilePath)) {
            // 如果檔案不存在，預設餘額 10000 並建立檔案
            const defaultBalance = 10000;
            fs.writeFileSync(balanceFilePath, defaultBalance.toString(), 'utf8');
            resolve(defaultBalance);
        } else {
            // 如果檔案存在，讀取餘額
            fs.readFile(balanceFilePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(parseFloat(data));
            });
        }
    });
};

const updateBalance = (newBalance) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(balanceFilePath, newBalance.toString(), 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

// 生成唯一訂單 ID
const generateOrderId = () => {
    return `id_${Math.floor(Date.now() / 1000)}`;
};
// 生成唯一的流水號（可根據需要調整）

// 取得當前的 Unix 時間戳
const getCurrentTimestamp = () => {
    return Math.floor(Date.now() / 1000);
};
// 計算 start_time
const calculateStartTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();

    if (seconds < 30) {
        // 在 30 秒內，無條件進位，加 1 分鐘
        now.setMinutes(now.getMinutes() + 1);
    } else {
        // 超過 30 秒，加 2 分鐘
        now.setMinutes(now.getMinutes() + 2);
    }

    // 清除秒數，確保是整點分鐘數
    now.setSeconds(0);

    return Math.floor(now.getTime() / 1000); // 返回 timestamp
};

const generateCycleId = () => {
    const now = new Date();
    
    // 獲取當前小時、分鐘，並捨去秒數
    const hours = String(now.getHours()).padStart(2, '0');  // 格式化成兩位數，例如 3 變成 03
    const minutes = String(now.getMinutes()).padStart(2, '0');  // 格式化成兩位數，例如 1 變成 01
    const cycleId = `${hours}${minutes}00`;  // 組合 cycleId，秒數固定為 00
    
    return cycleId;  // 返回新的 cycleId
};

// 確保目錄存在
if (!fs.existsSync(ordersDirectory)) {
    fs.mkdirSync(ordersDirectory);
}
// 處理接收的訂單數據並存入檔案
const saveOrderToFile = (game_cycle_id, orderData) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(ordersDirectory, `${game_cycle_id}.txt`);
        const orderEntry = JSON.stringify(orderData) + '\n---\n'; // 格式化並加上分隔符號
        
        fs.appendFile(filePath, orderEntry, 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

//啟動server 時的自動執行函式
(async ()=>{
	let balance = await readBalance();
	console.log("目前餘額" + balance)
})()

app.post('/api/getNewCycleInfo', async (req, res) => {
    const serverTime = getCurrentTimestamp();
    const startTime = calculateStartTime();
    const data = {
				status: 1,
        info: {
						start_time: startTime, // 計算後的 start_time
            server_time: serverTime // 當前伺服器的 timestamp
        }
    };
    res.json(data);
});
app.post('/api/getLastOpenInfo', (req, res) => {
    // 生成隨機的骰子點數，範圍為 1 到 6
    const getRandomDiceNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    // 生成三個隨機的骰子點數
    const resultNumber = [
        getRandomDiceNumber(),
        getRandomDiceNumber(),
        getRandomDiceNumber()
    ];

    var data = {
				status: 1,
        info: {
            result_number: resultNumber
        }
    };
	
		//更新現在的金額
	

    res.json(data);
})

app.post('/api/addOrder', async (req, res) => {
		// 從請求中取得提交的資料
		var { game_type_id, bet_info, bet_balance } = req.body;

	  // 將可能不正確的 JSON 格式轉換為正確的 JSON
		game_type_id = game_type_id.replace(/'/g, '"');
		bet_info = bet_info.replace(/'/g, '"');
		bet_balance = bet_balance.replace(/'/g, '"');
		// 將字串格式轉換為陣列
		const gameTypeIdArr = JSON.parse(game_type_id);
		const betInfoArr = JSON.parse(bet_info);
		const betBalanceArr = JSON.parse(bet_balance);

		// 計算總下注金額
		const totalBet = betBalanceArr.reduce((acc, bet) => acc + parseFloat(bet), 0);

		// 讀取當前餘額
		let balance = await readBalance();

		if (balance < totalBet) {
				return res.status(400).json({ status: 0, error: 'Insufficient balance' });
		}

		// 更新餘額並寫回檔案
		balance -= totalBet;
		await updateBalance(balance);

		// 生成訂單 ID
		const orderIds = gameTypeIdArr.map(() => generateOrderId());
		
		//生成目前期數
		const game_cycle_id = generateCycleId()
		// 保存訂單資料
		const submit_data = {
				game_cycle_id,
				game_type_id: gameTypeIdArr,
				bet_info: betInfoArr,
				bet_balance: betBalanceArr
		};
		await saveOrderToFile(game_cycle_id, submit_data);

		// 回應成功，返回訂單 ID 和更新後的餘額
		res.json({
				status: 1,
				info: {
						order_id: orderIds,
						balance: balance.toFixed(2) // 餘額四捨五入到小數點後兩位
				}
		});

});
app.post('/api/checkUserStatus', async (req, res) => {
	const balance = await readBalance();
	res.json({"status": 1, "info": {"balance": balance}});
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
