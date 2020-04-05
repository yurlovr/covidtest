const Data = require('../models/Data')

module.exports.setData = async function setData (ctx, next) {
  const {userId, answers} = ctx.request.body
  if(!userId || !answers) return ctx.throw(400, 'Something go wrong')
  await Data.create({
    userId,
    answers
  })
  ctx.status = 200
  ctx.body = { message: 'success'}
}