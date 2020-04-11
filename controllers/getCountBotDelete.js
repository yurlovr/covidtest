const Data = require('../models/Data')

module.exports.getCountBotDelete = async function getCountBotDelete (ctx, next) {
  const { data } = ctx.request.body
  if (!data) return ctx.throw(400, 'Something go wrong')
  if (data !=='91-DiVoC-TsEt') return ctx.throw(400, 'Something go wrong')
  await Data.deleteMany({bot: true})

  ctx.status = 200
  ctx.body = {
    data: 'success'
  }
}