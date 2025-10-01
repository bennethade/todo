const path = require('path'); // Added to handle file paths

const jwt = require('jsonwebtoken'); // Added to handle JWT verification

const router = require('express').Router();

const TodoController = require('../controller/todo.controller');


router.post('/store-todo', TodoController.createTodo);

router.get('/getUsertodoList', TodoController.getUserTodo);



module.exports = router;