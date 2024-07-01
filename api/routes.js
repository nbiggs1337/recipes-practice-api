
const app = require('./app');

// init test route
app.get('/', (req, res) => {
    res.json({
      message: '👋🌎🌍🌏',
    });
  });