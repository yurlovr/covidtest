const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const serve = require('koa-static')
const { setData } = require('./controllers/setData')
const { getCount } = require('./controllers/getCount')
const { getCountBot } = require('./controllers/getCountBot')
const { getCountBotAnswer } = require('./controllers/getCountBotAnswer')
const { getCountBotDelete } = require('./controllers/getCountBotDelete')
const handleMongooseValidationError = require('./libs/validationError');

const app = new Koa();

app.use(cors())
app.use(require('koa-bodyparser')())
app.use(serve('public'))
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err.status) {
      ctx.status = err.status
      ctx.body = err.errors ? {errors: err.errors} : {error: err.message}
    } else {
      ctx.status = 500;
      ctx.body = {error: 'Internal server error'}
    }
  }
});
const router = new Router({prefix: '/api'})

router.post('/data', handleMongooseValidationError, setData)

router.post('/count', handleMongooseValidationError, getCount)

router.post('/countBot', handleMongooseValidationError, getCountBot)

router.post('/countBotAnswer', handleMongooseValidationError, getCountBotAnswer)

router.post('/countBotDelete', handleMongooseValidationError, getCountBotDelete)

app.use(router.routes())


module.exports = app;