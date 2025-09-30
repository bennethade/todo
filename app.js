const express = require('express');

const body_parser = require('body-parser');

const userRouter = require('./routers/user.router');


const app = express();

app.use(body_parser.json());

app.use('/', userRouter);

app.use(express.static('public'));  //Added for public html files to work


module.exports = app;