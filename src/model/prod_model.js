module.exports = (app) => {

    let modelo = {

         insertProduto: (produt,res) => {
            const sql = `INSERT INTO PRODUTO SET ? `
            const conn = app.db.conection.myconnect();
             try {
                return conn.query(sql,produt, (erro,retorno) => {
                    if(erro){
                        res.status(400).json(erro);
                        throw erro;
                    }else{
                        
                        res.status(201).json(retorno);
                    }
                    
                });

             } catch (error) {

                console.log(error); 

             }finally{

                conn.end();
             }

         },
         updateProduto:  (produt, res) =>{
            const sql = `UPDATE PRODUTO SET ? WHERE id = ?`
            const conn = app.db.conection.myconnect();
                try {
              conn.query(sql,[produt, produt.id], (erro,retorno) => {
                        if(erro){
                            res.status(400).json(erro);
                            throw erro;
                        }else{
                            
                            res.status(200).json(retorno);
                        }
                        
                    });

                }finally{

                    conn.end();
                }

            },
         allProduto: async () => {
            const sql = 'SELECT * FROM PRODUTO'
            const conn = app.db.conection.myconnect();
                try {
                    conn.query(sql, (erro,retorno) => {
                        if(erro){
                            throw erro;    
                        }else{
                            return retorno;
                        }
                        
                    });

                } catch (error) {

                    console.log(error); 

                }finally{

                    conn.end();
                }

         }

         }

    return modelo;

}