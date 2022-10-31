import {Router} from 'express';
import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers';

const router = Router();

 
router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá, DEV!');
});

router.get('/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll);

router.post('/cidades',
  CidadesController.createValidator,
  CidadesController.create);

export {router};
