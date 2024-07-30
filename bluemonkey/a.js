// 假設有一個 API 提供以下 URL 的資料
const url = 'https://api.example.com/data';

// 使用 fetch API 來獲取資料
fetch(url)
  .then(response => {
    // 檢查請求是否成功
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // 將回應解析為 JSON
    return response.json();
  })
  .then(data => {
    // 在這裡處理獲取到的資料
    console.log(data);
  })
  .catch(error => {
    // 處理錯誤
    console.error('There was a problem with the fetch operation:', error);
  });
