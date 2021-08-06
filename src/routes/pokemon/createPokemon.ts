import { Request, Response } from 'express';
import {Pokemon} from "../../models/pokemon";
import {ServerError} from "../../util/util";
import {User} from "../../models/user";



export default async (req: Request, res: Response): Promise<void> => {
    let newPokemon = req.body;
    let result = await Pokemon.find({});
    let img = "https://img.pokemondb.net/artwork/" + newPokemon.name.toLowerCase() +".jpg";
    let id = result.length + 1 +'';
try {
    if (newPokemon.name === ''|| newPokemon.name === undefined){
        throw new ServerError({
            message: "no name",
            statusCode: 400,
        });
    }
    let pokemonExists: boolean;
    pokemonExists = await Pokemon.exists({
        name: newPokemon.name
    });
    if (pokemonExists) {
        throw new ServerError({
            message: "Pokemon Already exist.",
            statusCode: 400,
        });
    }
    var pokemon = new Pokemon({
        id: id,
        name: newPokemon.name,
        type: [newPokemon.type],
        img: img,
        stats: {
            hp: newPokemon.baseHp,
            attack: newPokemon.baseAttack,
            defense: newPokemon.baseDefence,
            spattack: newPokemon.baseSpAtk,
            spdefense: newPokemon.baseSpDef,
            speed: newPokemon.baseSpeed
        },
        misc: {
            height: newPokemon.height,
            weight: newPokemon.weight,
            abilities: {normal:newPokemon.abilities,
             hidden: newPokemon.hiddenAbility}
        }
    });
    await pokemon.save()

    const added = await Pokemon.findOne({id: id});
    res.status(200).json({ added });

}catch (err) {
    if (err instanceof ServerError) {
        res.status(err.statusCode).send(err.message);
    } else {
        res.status(500).send("Unexpected error.");
    }
}
};