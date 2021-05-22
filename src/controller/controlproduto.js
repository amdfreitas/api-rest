module.exports = (app)=>{

       const prod = app.model.prod_model;
       //controller de produto e regras de negocios
       let funCliente = {

            cadProduto: (req, res) => {

                const p = req.body;
                prod.insertProduto(p,res);
                            
            },
            updateProduto: (req, res) => {

                const p = req.body;

                prod.updateProduto(p,res)
                  
              
            },
            allProduto:(req, res) => {
                prod.allProduto(res);
            },
            searchProduto: (req, res) => {
                const id = req.params.id;
                prod.searchProduto(id,res);
            },
            deleteProduto: (req,res) => {
                const p = req.body;
                prod.deleteProduto(p,res);
            }
       } 

       return funCliente;
}