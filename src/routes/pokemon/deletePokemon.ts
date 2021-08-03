import { Request, Response } from 'express';
import {Pokemon} from "../../models/pokemon";
import { ServerError } from '../../util/util';
export default async (req: Request, res: Response): Promise<void> => {
    const id = req.body.id;
    const name = req.body.name;
    try {
        if (id ===''|| id === undefined || name ===''|| name === undefined) {
            throw new ServerError({
                message: "no id or name ",
                statusCode: 400,
            });
        }

    let pokemonExists: boolean;
    pokemonExists = await Pokemon.exists({
            id: id,
            name: name,
        });

    if (!pokemonExists) {
        throw new ServerError({
            statusCode: 400,
            message: "no such pokemon",
        });
    }

    await Pokemon.deleteOne({id: id, name: name});
    res.sendStatus(204);

    }catch (err) {
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
}
};