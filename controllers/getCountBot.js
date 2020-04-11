const Data = require('../models/Data')

module.exports.getCountBot = async function getCountBot (ctx, next) {
  const { data } = ctx.request.body
  if (!data) return ctx.throw(400, 'Something go wrong')
  if (data !=='91-DiVoC-TsEt') return ctx.throw(400, 'Something go wrong')
  const count = await Data.find()
  const conuntBot = count.filter(item => item.bot)

  ctx.status = 200
  ctx.body = {
    data: conuntBot.length
  }
}