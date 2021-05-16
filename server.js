const express = require('express');
const consign  = require('consign');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


consign({cwd:'src'})
    .include('controller')
    .then('routas')
    .into(app);




module.exports = app;