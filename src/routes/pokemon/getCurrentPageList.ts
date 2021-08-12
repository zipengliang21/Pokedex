import {Request, Response} from "express";
import {Pokemon, PokemonDocument} from "../../models/pokemon";

export default async (req: Request, res: Response): Promise<void> => {
    const page: number = parseInt(req.params.page);
    const pokemonList: PokemonDocument[] = await Pokemon.find({})
        .sort({id: 1})
        .limit(16)
        .skip(16 * page);

    res.status(200).json({pokemonList});
};