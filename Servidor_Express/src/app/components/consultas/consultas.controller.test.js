const controller = require('./consultas.controller');
const EjecutarFacade = require('../../components/consultas/consultas.facade');

beforeEach(() => {});

describe('prueba1 Jest bice contralador', () => {
    /** @test {controller.executeTransfer} */
    it('retorna un mensaje de éxito 200', async () => {
        EjecutarFacade.executeTransfer = jest.fn().mockImplementation(() =>
           Promise.resolve(200),
        );
        const esto=await controller.executeTransfer({});
        expect(esto).toBe(200);
    });
});
