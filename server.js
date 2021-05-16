const express = require('express');
const consign  = require('consign');
const app = express();

consign({cwd:'src'})
    .include('controller')
    .then('routas')
    .into(app);




module.exports = app;