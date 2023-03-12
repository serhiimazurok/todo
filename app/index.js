const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const router = require('./routes');

const app = new Koa();

app.use(bodyParser());

app.use(router.routes())

app.listen(config.PORT, () => {
  console.log("Server is started!", `PORT: ${config.PORT}`);
});