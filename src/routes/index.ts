import { Router } from 'express';
// Importando router do express

// ÁREA PARA IMPORTAR OS CONTROLLERS PARA CÁ, NO FORMATO ABAIXO
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';


const router = Router();

// ÁREA PARA CRIAR AS ROTAS NO FORMATO ABAIXO, COLOCANDO OS CONTROLLERS NO SEGUNDO PARÂMETRO, ONDE ESTÁ A FUNÇÃO VAZIA

router.get('/', pageController.home);

router.get('/comes', pageController.comes);

router.get('/bebes', pageController.bebes);

router.get('/passeios', pageController.passeios);



router.get('/search', searchController.search);



export default router;