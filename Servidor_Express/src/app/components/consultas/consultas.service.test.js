const ejecutarService = require('../../components/consultas/consultas.service');

beforeEach(() => {});

describe('prueba3 Jest bice service 202', () => {
    /** @test {ejecutarService.executeTransfer} */
    it('retorna un mensaje de éxito 202', async () => {
        ejecutarService.executeTransfer = jest.fn().mockImplementation(() =>
           Promise.resolve(202),
        );
        const esto = await ejecutarService.executeTransfer({});
        expect(esto).toBe(202);
    });
});
