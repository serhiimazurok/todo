const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const router = require('./routes');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.userId = 'b546f022-bf06-426e-9e13-1882dcb761b7';
  await next();
});

app.use(router.routes())

app.listen(config.PORT, () => {
  console.log("Server is started!", `PORT: ${config.PORT}`);
});