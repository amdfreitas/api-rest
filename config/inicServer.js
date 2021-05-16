const app = require('../server');
const  server = require('http');


const inicia = server.createServer(app);

inicia.listen(7577,() => {
    console.log('Servidor esta UP !!!!');
});
