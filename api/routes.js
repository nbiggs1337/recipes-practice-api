const express = require("express");
const routes = express.Router();


// init test route
routes.get('/', (req, res) => {
    res.json({
      message: '👋🌎🌍🌏',
    });
  });




  

  module.exports = routes