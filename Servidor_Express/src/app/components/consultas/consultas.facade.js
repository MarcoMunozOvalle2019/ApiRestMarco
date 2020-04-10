const ejecutarService = require('../../components/consultas/consultas.service');

class EjecutarFacade{
    static async executeTransfer(req){
        const output = await ejecutarService.executeTransfer(req)
        return output
    }
}
module.exports = EjecutarFacade;