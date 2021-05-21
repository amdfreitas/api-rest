module.exports = (app) => {

let modelo = {

         insertProduto: (produt,res) => {
            const sql = `INSERT INTO PRODUTO SET ? `
            const conn = app.db.conection.myconnect();
             try {
                conn.query(sql,produt, (erro,retorno) => {
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
            const sql = `UPDATE PRODUTO SET ? WHERE id = ?`;
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
         allProduto:  (res) => {
            const sql = 'SELECT * FROM PRODUTO';
            const conn = app.db.conection.myconnect();

                try {
                    conn.query(sql, (erro,retorno) => {
                        if(erro){
                            throw erro;    
                        }else{
                            res.status(200).json(retorno);
                        }
                        
                    });

                } catch (error) {

                    console.log(error); 

                }finally{

                    conn.end();
                }

         },
         searchProduto: (id, res) => {

                const sql = 'SELECT * FROM PRODUTO WHERE id = ?';
                const conn = app.db.conection.myconnect();
                try {

                    conn.query(sql,[id], (error,retorno) => {

                        if(error){
                            throw error;
                        }else{
                            res.status(200).json(retorno);
                        }

                        });

                }catch (error) {

                    console.log(error); 
                } finally { conn.end();}
          
             },
         deleteProduto: (produt,res) => {

            const sql = 'DELETE FROM PRODUTO WHERE id = ?';
            const conn = app.db.conection.myconnect();
            try {

                conn.query(sql,[produt.id], (error,retorno) => {

                    if(error){
                        throw error;
                    }else{
                        res.status(200).json(retorno);
                    }

                    });

            }catch (error) {
                console.log(error); 
            } finally { conn.end();}

         }    

         }

    return modelo;

}