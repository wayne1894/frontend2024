var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth')
var Member = require("../models/member"); //Member 建構式

var axios = require('axios');

/**
 * @swagger
 * components:
 
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *           default: testuser@gmail.com
 *         password:
 *           type: string
 *           description: The user's password
 *           default: a123456789
 *         displayName:
 *           type: string
 *           description: The user's displayName
 *       example:
 *         email: testuser@gmail.com
 *         password: a123456789
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /member/add:
 *   post:
 *     summary: Register a new user
 *     tags: [member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */

router.post('/add', async function(req, res, next) {
  let data = req.body;
  //TODO後端驗證欄位
  if(1 == -1) return res.status(400).json({err:true,message:"欄位驗證出錯"})
  let member = new Member(data);
  try{
    let result = await member.add();
    if(result.err) { //代表有錯
			if(result.err == "auth/email-already-exists") return res.status(400).json({ err: true, message: "User already exists"})
			if(result.err == "auth/invalid-password") return res.status(400).json({ err: true, message: "invalid-password"})
			//最後回傳500錯誤
      return res.status(500).json({ err: true, message: result.err})
    }
  }catch(err){
    return res.status(500).json({ err: true, message: err.toString()})
  }

  try{
    let result = await member.loginMember(data.email,data.password);//執行登入
    await member.sendVerifyEmail(result.data.idToken); //寄送會員認證信
    res.json({
      success: true,
      idToken: result.data.idToken,
      refreshToken : result.data.refreshToken,
    })
  }catch(err){
    return res.status(500).json({ err: true, message: err.toString()})
  }
});

/**
 * @swagger
 * /member/login:
 *   post:
 *     summary: Login a user
 *     tags: [member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', async function(req, res, next) {
  let data = req.body;
  let member = new Member();
  try{
    let result = await member.loginMember(data.email,data.password);
		console.log(result,"result")
    res.json({
      success:true,
      idToken: result.data.idToken,
      refreshToken : result.data.refreshToken,
			localId: result.data.localId,
			email:result.data.email,
			displayName: result.data.displayName
    })
  }catch(err){
    return res.status(500).json({ err: true, message : err.response.data.error})
  }
})

router.get("/logout", async function(req, res, next) {
  res.json({success: true})
})

/**
 * @swagger
 * /member/update:
 *   post:
 *     summary: update a user
 *     tags: [member]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: The user's new password
 *               displayName:
 *                 type: string
 *                 description: The user's displayName
 *     responses:
 *       200:
 *         description: update successful
 *       400:
 *         description: Invalid credentials
 */
router.post("/update", auth, async function(req, res, next) {
  let data = req.body;
  let member = new Member();
  //檢查當前密碼是否為現在會員的密碼
	data = {
		displayName: data.displayName || "",
		password : data.password || ""
	}
	if(!data.password) delete data.password;
  try{
    let result = await member.update(req.user.uid,data);
    if(result.err) {
			console.log(result.err,"result.err")
			return res.status(500).json({ err: true, message : "err"})
		}
		res.json({
      success: true
    })
  }catch(err){
    return res.status(500).json({ err: true, message : "err"})
  }
})

/**
 * @swagger
 * /member/course:
 *   get:
 *     summary: get user courses
 *     tags: [member]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: Invalid credentials
 */
//取得使用者已購買的課程(這邊看情況吐出課程訊)
router.get("/course", auth, async function(req, res, next) {
  res.json([
		 {
				"id": "5Xoh2OeeKbXEzeRTBWyR",
				"createAt": "1728718164254"
     },
	])
})

module.exports = router;

