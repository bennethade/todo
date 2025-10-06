const path = require('path'); // Added to handle file paths

const jwt = require('jsonwebtoken'); // Added to handle JWT verification

const router = require('express').Router();

const TodoController = require('../controller/todo.controller');


router.post('/store-todo', TodoController.createTodo);

router.get('/getUserTodoList', TodoController.getUserTodo);


router.get('/deleteTodo', TodoController.deleteTodo);



module.exports = router;