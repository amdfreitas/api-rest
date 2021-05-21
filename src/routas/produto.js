
module.exports = (app) => {

    const produt = app.controller.controlproduto;
    app.get('/', produt.homeClient);
    app.post('/cadastra/produto',produt.cadProduto);
    app.put('/update/produto/',produt.updateProduto);
    app.get('/search/produto/:id',produt.searchProduto);
    app.get('/all/produto/',produt.allProduto);
    app.delete('/delete/produto/',produt.deleteProduto);
    

}
