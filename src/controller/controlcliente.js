module.exports = (app)=>{

       let funCliente = {

            cadCliente: (req, res) => {
                console.log(req.body);
                return res.status(200).send();
            },
            homeClient: (req, res) => {
                res.send('asdfsdfsdfsdf');
            }
       } 

       return funCliente;
}