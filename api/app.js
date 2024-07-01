const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

// create app
const app = express();

//middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

//require routes
require("./routes.js")(app)



module.exports = app;