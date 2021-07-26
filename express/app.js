import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
const app = express();
app.use(express.json());



/*all은 사용되어 지는 경로에 대해서만 사용이 가능함 사용하고 싶으면 정확히 명시 해야 한다.
ues는 사용되어 지는 경로는 제외한 모든 부분에서 사용 가능  */
// app.all('/api', (req, res, next) => {
//   console.log('all');
//   next();
// });

// app.use('/sky', (req, res, next) => {
//   console.log('use');
//   next();
// });

// app.get('/', 
// (req, res, next) => {
//   if (true) {
//     return res.send('Hello');
//   }
//   console.log('first');
//   res.send('HI');
  
//   // next(new Error('error'));
// },
// (req, res, next) => {
//   console.log('first2');
//   // next();
// }
// )

// app.get('/', ((res, req, next) => {
//   console.log('second');
// }))

// //에러 핸들러
// app.use((req, res, next) => {
//   res.status(404).send('Not available@__@')
// })

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later!');
// });

// post 처리
app.post('/', (req, res, next) => {
  console.log(req.body);
});

// 에러처리

app.get('/file', (req, res) => {
  fs.readFile('file1.txt', (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

// 동기적인 처리를 해주는 것
app.get('file1', (req, res) => {
  try {
    const data = fs.readFileSync('file1.txt');
  res.send(data);
  } catch (error) {
    res.sendStatus(404)
  }
});

app.get('/file2', (req, res) => {
  fsAsync
  .readFile('file2.txt')//
  .then((data) => res.send(data))
  .catch(error => res.sendStatus(404));
})

app.get('file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
    res.send(data);
  } catch(error){
    res.sendStatus(404);
  }
});

// 에러핸들러
app.use((req, res, next) => {
  console.error(error);
  res.status(500).json({message : 'Something went wrong'});
});

app.listen(8080);
