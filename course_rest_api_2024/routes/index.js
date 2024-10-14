var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth');

//https://swagger.io/docs/
//https://editor.swagger.io/



/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Retrieve course information
 *     tags: [Courses]
 *     description: Retrieve a list of courses with details such as ID, name, description, and image URL.
 *     responses:
 *       200:
 *         description: Successful retrieval of course information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique ID of the course
 *                   name:
 *                     type: string
 *                     description: Course name
 *                   color:
 *                     type: string
 *                     description: Hex color code associated with the course
 *                   img:
 *                     type: string
 *                     description: Course image URL
 *                   description:
 *                     type: string
 *                     description: Course description
 *                   introduction:
 *                     type: string
 *                     description: Additional introduction for the course
 */
router.get('/courses', async function(req, res, next) {
  res.json([{
					id: "5Xoh2OeeKbXEzeRTBWyR",
					name: "進入 python 的魔法世界 - 第一次學程式入門課",
					color:"#b5b5ac",
					img: "https://ik.imagekit.io/bluemonkey/wayne1894-school-49/tr:w-800,c-at_max/o/web%2F1705297498.jpg?alt=media&token=b0c071d3-ad1b-42c5-980c-d58fbd5fd2a0",
					description: "這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
					introduction: "",
				},{
					id: "sdgekkckdkfkfss",
					name: "基礎教學資訊科技基礎教學",
					color:"#b5b5ac",
					img: "https://ik.imagekit.io/bluemonkey/wayne1894-school-49/tr:w-800,c-at_max/o/web%2F1647016231.png?alt=media&token=e42b5ff7-b79b-45ca-892a-e9936c717723",
					description: "這堂課教導基礎教學資訊科技基礎教學。",
					introduction: ""
				},{
					id: "vvdgggge4ee",
					name: "illustrator基礎教學",
					color:"#f52e36",
					img: "https://webfile-68.web.app/1.svg",
					description: "這堂課教導illustrator。",
					introduction: ""
				}]);
})


/**
 * @swagger
 * /info:
 *   get:
 *     summary: website information
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Successful retrieval of website information
 */
router.get('/info', async function(req, res, next) {
	res.json({
		"line": [
                {
                    "code": "W",
                    "color": "#f52e36",
                    "sort": 1,
                    "metro": [
                        {
                            "code": "W1",
                            "sort": 1,
                            "name": "html語法",
                            "checked": true
                        },
                        {
                            "code": "W2",
                            "sort": 2,
                            "name": "css語法",
                            "checked": true
                        },
                        {
                            "code": "W3",
                            "sort": 3,
                            "name": "網頁設計",
                            "checked": true
                        }
                    ],
                    "name": "網頁程式基礎",
                    "checked": true,
                    "introduction": "提供給第一次學習程式的人規劃的基礎課程，課程包括電腦基礎、資訊科技、網頁程式設計、基本 html、css語法等。"
                },
                {
                    "code": "M",
                    "color": "#FD952B",
                    "sort": 2,
                    "metro": [
                        {
                            "code": "M1",
                            "sort": 1,
                            "name": "平面設計",
                            "checked": true
                        },
                        {
                            "code": "M2",
                            "sort": 2,
                            "name": "網路行銷",
                            "checked": true
                        },
                        {
                            "code": "M3",
                            "sort": 3,
                            "name": "SEO",
                            "checked": true
                        },
                        {
                            "code": "M4",
                            "sort": 4,
                            "name": "網路廣告",
                            "checked": true
                        }
                    ],
                    "name": "網路與行銷",
                    "checked": true,
                    "introduction": "21世紀如何建置網頁並達到宣傳的目的？現在網路上已經有很多工具能幫我們快速建立網頁，但我們還是得學習這個年代必要行銷技能，才能更彈性推廣你的產品，這個分類教你如何行銷，課程也包含基本的平面設計。"
                },
                {
                    "code": "F",
                    "color": "#1e77d5",
                    "sort": 3,
                    "metro": [
                        {
                            "code": "F1",
                            "sort": 1,
                            "name": "網頁切版",
                            "checked": true
                        },
                        {
                            "code": "F2",
                            "sort": 2,
                            "name": "javascript",
                            "checked": true
                        },
                        {
                            "code": "F3",
                            "sort": 3,
                            "name": "網頁動畫",
                            "checked": true
                        },
                        {
                            "code": "F4",
                            "sort": 4,
                            "name": "vue.js",
                            "checked": true
                        },
                        {
                            "code": "F5",
                            "sort": 5,
                            "name": "nuxt.js",
                            "checked": true
                        },
                        {
                            "code": "F6",
                            "sort": 6,
                            "name": "firebase",
                            "checked": true
                        }
                    ],
                    "name": "網站前端",
                    "checked": true,
                    "introduction": "網站前端，是網頁建置較為專業的工作領域，這邊分享我在職場上成為前端工程師的心得，從基礎的 javascript 程式撰寫到前端程式開發，教導你成為一名前端工程師。"
                },
                {
                    "code": "B",
                    "color": "#9b5e31",
                    "sort": 4,
                    "metro": [
                        {
                            "code": "B1",
                            "sort": 1,
                            "name": "node.js",
                            "checked": true
                        },
                        {
                            "code": "B2",
                            "sort": 2,
                            "name": "資料庫",
                            "checked": true,
                            "name2": "sql語法"
                        },
                        {
                            "code": "B3",
                            "sort": 3,
                            "name": "firebase",
                            "checked": true
                        },
                        {
                            "code": "B4",
                            "sort": 4,
                            "name": "Linux",
                            "checked": true
                        },
                        {
                            "code": "B5",
                            "sort": 5,
                            "name": "網站架設",
                            "checked": true,
                            "name2": "google gcp"
                        }
                    ],
                    "name": "網站後端",
                    "checked": true,
                    "introduction": "談到網站製作的技術，後端程式是不可或缺的，前端開發者也要對後端原理有基本的了解才能掌握全貌，這邊會教你基本的後端程式、資料庫規劃到伺服器建置等技術，使你能夠建立自己的網站服務。"
                }
            ],
		"indexInfo": {
			  "title":"wayne1894 教學網",
				"facebook": "https://www.facebook.com/wayne1894.school",
				"header_about": "學習網站建置技術，隨心所欲創造你想要的應用。",
				"header_blog": "",
				"instagram": "",
				"header_course": "線上課程",
				"email": "mose286778@gmail.com",
				"emailName": "客服信箱",
				"phoneName": "聯絡電話",
				"marqueeAll": true,
				"marqueeOpen": false,
				"nav": [
						{
								"checked": true,
								"sort": 1,
								"position": "",
								"title": "線上課程",
								"type": "courses"
						},
						{
								"checked": true,
								"sort": 2,
								"position": "",
								"title": "平台介紹",
								"type": "about"
						},
				]
		},
	})
})




module.exports = router;

