const Data = require('../models/Data')

module.exports.getCount = async function getCount (ctx, next) {
  const { data } = ctx.request.body
  if (!data) return ctx.throw(400, 'Something go wrong')
  if (data !=='91-DiVoC-TsEt') return ctx.throw(400, 'Something go wrong')
  const count = await Data.find()
  ctx.status = 200
  ctx.body = {
    count: count.length,
    data: count
  }
}