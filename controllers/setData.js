const Data = require('../models/Data')

module.exports.setData = async function setData (ctx, next) {
  const {userId, answers, bot} = ctx.request.body
  if(!userId || !answers) return ctx.throw(400, 'Something go wrong')
  const time = new Date().toLocaleString('ru-Ru')
  await Data.create({
    userId,
    answers,
    bot,
    time
  })
  ctx.status = 200
  ctx.body = { message: 'success'}
}