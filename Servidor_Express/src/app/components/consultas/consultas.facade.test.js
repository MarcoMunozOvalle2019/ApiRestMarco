const ejecutarService = require('../../components/consultas/consultas.service');
const EjecutarFacade = require('../../components/consultas/consultas.facade');

beforeEach(() => {});

describe('prueba2 Jest bice facade 201', () => {
    /** @test {EjecutarFacade.executeTransfer} */
    it('retorna un mensaje de éxito 201', async () => {
        ejecutarService.executeTransfer = jest.fn().mockImplementation(() =>
           Promise.resolve(201),
        );
        const esto=await EjecutarFacade.executeTransfer({});
        expect(esto).toBe(201);
    });
});
