module.exports = (app)=>{

       const prod = app.model.prod_model;
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
            },
            homeClient: (req, res) => {
                const conn = app.db.conection.myconnect();
                const criate = app.db.Tables;
                criate.init(conn);

                return  res.status(200).send();

            }
       } 

       return funCliente;
}