class Mercadodb {

    init(connect) {
        this.connect = connect;
        this.produto();
       
    }

    produto() {
        const sql = `CREATE TABLE IF NOT EXISTS PRODUTO ( 
            id int not null primary key AUTO_INCREMENT, 
            prodNome varchar(40) not null,
            prodDesc varchar(100) not null,
            prodPrec int not null);`;

        this.connect.query(sql, (erro)=>{
            if(erro){
                throw erro;
            }
        });

    }
}
module.exports = new Mercadodb;