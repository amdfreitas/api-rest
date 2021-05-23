module.exports = (app) =>{


    let repository = {

            query:(sql,parament)=> {
                const conn = app.db.conection.myconnect();
                return new Promise((resolve,reject) => {

                    try {

                        conn.query(sql,parament , (erro,retorno) => {
                            if(erro){
                                reject(erro);
                            }else{
                                resolve(retorno);
                            }
                            
                        });
                        
                    }finally{ 

                        conn.end();                        
                    }
                  

                });

            }
    }

    return repository;
}
