
const ejecutarFacade = require('../../components/consultas/consultas.facade');

class EjecutarController{
    static async executeTransfer(req){
        const output = await ejecutarFacade.executeTransfer(req)
        return output
    }
}
module.exports = EjecutarController;