
module.exports = (app) => {

    const client = app.controller.controlcliente;
    app.get('/', client.homeClient);
    app.post('/cadastra/cliente',client.cadCliente);
    

}
