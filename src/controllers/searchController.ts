import { Request, Response } from 'express';
// Importando os types Request e o Response do express

// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const search = (req: Request, res: Response) => {
    res.render('search');
};

//