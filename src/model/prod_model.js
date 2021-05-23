module.exports = (app) => {

let modelo = {
         // model para intaração com banco de dados CRUD.
         insertProduto:  (produt) => {
            const sql = `INSERT INTO PRODUTO SET ? `
            const repost  = app.db.repository.query;

            return repost(sql,produt);

         },
         updateProduto:  (produt) =>{
            const sql = `UPDATE PRODUTO SET ? WHERE id = ?`;
            const prod = [produt, produt.id];
            const repost  = app.db.repository.query;

            return repost(sql,prod);

            },
         allProduto:  () => {
            const sql = 'SELECT * FROM PRODUTO';

            const repost  = app.db.repository.query;

            return repost(sql);
       
         },
         searchProduto: (id) => {

                const sql = 'SELECT * FROM PRODUTO WHERE id = ?';
                
                const repost  = app.db.repository.query;

                return repost(sql,id);
              
          
             },
         deleteProduto: (produt) => {

            const sql = 'DELETE FROM PRODUTO WHERE id = ?';
            const repost  = app.db.repository.query;

            return repost(sql,produt.id);
         
            }    

         }

    return modelo;

}