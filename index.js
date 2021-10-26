// externals inport
const express = require('express');
const bodyParser = require('body-parser');

// internals imports
const talkerRouter = require('./Routers/talkerRouter');
const loginRouter = require('./Routers/loginRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

