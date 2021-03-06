const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routers/auth');
const carRouter = require('./routers/car');
const boardRouter = require('./routers/board');
const bookmarkRouter = require('./routers/bookmark');
const commentRouter = require('./routers/comment');
const resultRouter = require('./routers/result');
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());

const corsOptions = {
  origin: true,
  method: '*',
  allowedHeaders: ['Content-type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/auth', authRouter);
app.use('/car', carRouter);
app.use('/board', boardRouter);
app.use('/bookmark', bookmarkRouter);
app.use('/comment', commentRouter);
app.use('/result', resultRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(8080);
