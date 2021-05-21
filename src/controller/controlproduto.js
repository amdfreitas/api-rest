module.exports = (app)=>{

       let funCliente = {

            cadProduto: (req, res) => {

                const prod = app.model.prod_model;
                const p = req.body;
                prod.insertProduto(p,res);
                            
            },
            updateProduto: (req, res) => {

                const prod = app.model.prod_model;
                const p = req.body;

                prod.updateProduto(p,res)
                  
              
            },
            allProduto:(req, res) => {
                const prod = app.model.prod_model;
                prod.allProduto();
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