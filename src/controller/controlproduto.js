module.exports = (app)=>{

       const prod = app.model.prod_model;
       //controller de produto e regras de negocios
       let funCliente = {

            cadProduto: async (req, res) => {

                const p = req.body;
                await prod.insertProduto(p)
                        .then((data) => res.status(201).json(data))
                        .catch((error) => res.status(400).json(error));
                            
            },
            updateProduto: async (req, res) => {

                const p = req.body;
                await prod.updateProduto(p)
                    .then((data) => res.status(200).json(data))
                    .catch((error) => res.status(400).json(error));
                  
              
            },
            allProduto: async (req, res) => {
                await prod.allProduto()
                    .then((data) => res.status(200).json(data))
                    .catch((error) => res.status(400).json(error));
            },
            searchProduto: async  (req, res) => {
                const id = req.params.id;
               await prod.searchProduto(id)
                    .then((data) => res.status(200).json(data))
                    .catch((error) => res.status(400).json(error));  
            },
            deleteProduto: async  (req,res) => {
                const p = req.body;
               await prod.deleteProduto(p)
                    .then((data) => res.status(200).json(data))
                    .catch((error) => res.status(400).json(error));
            }
       } 

       return funCliente;
}