import { Request, Response } from 'express';
// Importando os types Request e o Response do express

// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const home = (req: Request, res: Response) => {
    res.render('pages/home');
};

export const comes = (req: Request, res: Response) => {
    res.render('pages/home');
};

export const bebes = (req: Request, res: Response) => {
    res.render('pages/home');
};

export const passeios = (req: Request, res: Response) => {
    res.render('pages/home');
};




//