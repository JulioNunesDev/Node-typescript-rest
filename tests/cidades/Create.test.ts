import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Create - Cidades', ()=>{



  it('Cria registro', async ()=>{
    const res1 = await testServer.post('/cidades').send({nome: 'Caxias do sul'});


    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
});