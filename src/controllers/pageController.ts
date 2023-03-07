import { Request, Response } from 'express';
// Importando os types Request e o Response do express

import { Lugar } from '../models/Lugar';

// Importando o helper que ativa o menu
import { ativaMenu } from '../helpers/ativaMenu';

// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const home = async (req: Request, res: Response) => {

    let lugares = await Lugar.findAll();

    res.render('pages/home', { 

        menuativado: ativaMenu('home'),

        descricaoPagina: {
            titulo: 'Places for cool people',
            icone: 'iconeprincipal.svg'
        },

        lugares
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