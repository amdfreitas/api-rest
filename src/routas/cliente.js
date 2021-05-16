
module.exports = (app) => {

    const client = app.controller.createClient;
    app.get('/cadastra/cliente', client.cadCliente);
    

}
