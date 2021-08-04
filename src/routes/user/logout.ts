import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
    res.cookie('jwt', '', {
        expires: new Date(Date.now() + 1*1000),
        httpOnly: true,
    });
    res.status(200).json({});
};