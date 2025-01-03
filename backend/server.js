const express = require('express');
const app = express();
app.set('view engine','ejs');

const userRouter = require('./views/user');
app.use('/user',userRouter);
app.listen(3000);