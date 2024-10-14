var express = require('express');
var path = require('path');
const cors = require('cors');

var indexRouter = require('./routes/index');
var memberRouter = require('./routes/member');


var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

var app = express();

//firebase-admin
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

global.admin = admin; //設定全域引用
global.db = admin.firestore(); //設定全域引用

// 自訂 CORS 中間件
app.use(cors());

// Swagger 設定
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation with Swagger',
    },
		"servers": [
			{
				"url": "http://localhost:5886/api",
				"description": "Local server"
			},
			{
				"url": "https://wayne1894.com/api",
				"description": "real server"
			},
		],
  },
  apis: ['./routes/*.js'], // 指定包含 Swagger 註解的文件路徑
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/*",(async (req, res, next) => {  //所有請求都會經過
  next()
}));


app.use('/api/', indexRouter);
app.use('/api/member', memberRouter);

module.exports = app;