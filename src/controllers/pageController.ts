import { Request, Response } from 'express';
// Importando os types Request e o Response do express

// Importando o helper que ativa o menu
import { ativaMenu } from '../helpers/ativaMenu';

// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const home = (req: Request, res: Response) => {


    res.render('pages/home', { 

        menuativado: ativaMenu('home'),

        descricaoPagina: {
            titulo: 'Places for cool people',
            icone: 'iconeprincipal.svg'
        }
    });
};

export const comes = (req: Request, res: Response) => {
    res.render('pages/home', {

        menuativado: ativaMenu('comes'),

        descricaoPagina: {
            titulo: 'Comes',
            icone: 'comes.svg'
        }
    });
};

export const bebes = (req: Request, res: Response) => {
    res.render('pages/home', {

        menuativado: ativaMenu('bebes'),

        descricaoPagina: {
            titulo: 'Bebes',
            icone: 'bebes.svg'
        }
    });
};

export const passeios = (req: Request, res: Response) => {
    res.render('pages/home', {

        menuativado: ativaMenu('passeios'),
        
        descricaoPagina: {
            titulo: 'Passeios',
            icone: 'passeios.svg'
        }
    });
};




//