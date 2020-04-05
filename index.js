const app = require('./src/app');
const config = require('./config')

app.listen(config.port, () => {
  console.log(`App is running on http://localhost:${config.port}`);
});