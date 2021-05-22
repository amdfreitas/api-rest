const express = require('express');
const consign  = require('consign');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
/*
app.use((req, res,next) => {

    const conn = app.db.conection.myconnect();
    try {
        
        const criate = app.db.Tables;
        criate.init(conn);
    } catch (error) {
        console.log(error);
    }finally{ conn.end();}
   

   next();
});  

*/

consign({cwd:'src'})
    .include('db')
    .then('model')
    .then('controller')
    .then('routas')
    .into(app);




module.exports = app;