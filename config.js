module.exports = {
  port: process.env.PORT || 3000,
  mongodb: {
      uri: (process.env.NODE_ENV === 'test')
      ? 'mongodb://localhost/covid'
      : process.env.MONGODB_URI || 'mongodb://localhost/covid',
  }
}