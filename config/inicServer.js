const app = require('../server');
const  server = require('http');


const inicia = server.createServer(app);

//configuração  do   banco de dados.



inicia.listen(3000,() => {
    console.log('Servidor esta UP !');
});
