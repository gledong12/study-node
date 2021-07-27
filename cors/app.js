import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgen from 'morgan'; // 
import helmet from 'helmet'; // 공통적으로 보안에 필요한 옵션을 자동으로 추가해준다.

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined')); // 자동으로 로그를 남겨주는 미들웨어

app.use(cors({
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
})
);
app.use(helmet());

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
});

app.listen(8080);