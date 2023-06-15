const express = require('express');
const authRouter = require('./routers/auth.router');
const userRouter = require('./routers/user.router');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', authRouter);
app.use('/user', userRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
