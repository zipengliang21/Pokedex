import { Request, Response } from 'express';
import {Pokemon, PokemonDocument} from "../../models/pokemon";

export default async (req: Request, res: Response): Promise<void> => {
    const _id  = req.params._id;

    const pokemon: PokemonDocument[] = await Pokemon.find({ _id });

    res.status(200).json({ pokemon });
};
