import { Request, Response } from 'express';
// Importando os types Request e o Response do express

import { Lugar } from '../models/Lugar';

// Importando o helper que ativa o menu
import { ativaMenu } from '../helpers/ativaMenu';

import { Op } from 'sequelize';
// Importando o Op do sequelize para fazer a busca no banco de dados

// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const home = async (req: Request, res: Response) => {

    let lugares = await Lugar.findAll(
        {
            attributes: [ 'id', 'nome']
        }

    );

    res.render('pages/home', { 

        menuativado: ativaMenu('home'),

        descricaoPagina: {
            titulo: 'All',
            icone: 'iconeprincipal.svg'
        },

        lugares
    });
};

export const comes = async (req: Request, res: Response) => {

    let lugares = await Lugar.findAll(
        {
            where: {eat: 1}
        }
    );

    res.render('pages/home', {

        menuativado: ativaMenu('comes'),

        descricaoPagina: {
            titulo: 'Comes',
            icone: 'comes.svg',
        },

        lugares

    });
};

export const bebes = async (req: Request, res: Response) => {

    let lugares = await Lugar.findAll(
        {
            where: {drink: 1}
        }
    );

    res.render('pages/home', {

        menuativado: ativaMenu('bebes'),

        descricaoPagina: {
            titulo: 'Bebes',
            icone: 'bebes.svg'
        },

        lugares

    });
};

export const passeios = async (req: Request, res: Response) => {

    let lugares = await Lugar.findAll(
        {
            where: {chill: 1}
        }
    );

    res.render('pages/home', {

        menuativado: ativaMenu('passeios'),
        
        descricaoPagina: {
            titulo: 'Passeios',
            icone: 'passeios.svg'
        },
        lugares
    });
};




//