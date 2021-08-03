import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
    //Set cookie value to empty
    res.cookie('jwt', '', {
        expires: new Date(Date.now() + 1*1000),
        httpOnly: true,
    });
    res.status(200).json({});
};