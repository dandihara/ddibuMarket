const express = require('express');
const user_controller = require('./controller/user_controller');
const router = express.Router();

const db = require('./db/config')
const conn = db.init
//유저 router
router.get('/mypage',user_controller.getUser(conn));
router.post('/register',user_controller.register(conn));

//게시판 router
router.get('/content',board_controller.getBoard(conn));
router.post('/content',board_controller.createBoard(conn));