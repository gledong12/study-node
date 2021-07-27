import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js'

const app = express();

app.use(express.json()); // json body를 파싱할때 사용
app.use(express.urlencoded({extended: false})) //HTML Form 데이터를 받을때
app.use(express.static('public'));

app.use('/posts', postRouter);
app.use('/users', userRouter);


app.listen(8080);