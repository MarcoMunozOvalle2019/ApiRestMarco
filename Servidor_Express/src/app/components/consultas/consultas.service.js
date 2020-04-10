const axios = require('axios');

class EjecutarService{
    static async executeTransfer(req){

        const salida = await axios.get('https://www.indecon.online/')
        .then(function (response) {
          const value = JSON.parse(req.query.q)
          const tipo = value.json.tipo
          const thisOne = response.data.apis[tipo].example.response
          if(tipo=='0') return Object.values (thisOne).filter(w=>w.key == value.json.pide)
          if(tipo=='1') return thisOne
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
        return salida
    }
}
module.exports = EjecutarService;