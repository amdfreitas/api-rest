const app = require('../server');
const  server = require('http');

  
const inicia = server.createServer(app);



inicia.listen(3000,() => {
    console.log('Servidor esta UP !');
});
