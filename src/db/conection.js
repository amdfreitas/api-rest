const connect = require('mysql');

module.exports = (app) => {

    let conn = {

        myconnect: () => {
            return factoryConnect();

        }
     
    }

    let factoryConnect = () => {
        return connect.createConnection({
            host: 'localhost',
            port: 3306,
            user:'root',
            password: '123456',
            database: 'mercadoDB'

        });
    }

    return conn;
}