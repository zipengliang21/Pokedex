import mongoose from "mongoose";

import db from "../mongodb.config";

const instance = db.instance;

export interface IPokemon {
    name: string;
    id: string;
    img: string;
    type: Array<string>;
    stats: Object;
    moves: Object;
    damages: Object;
    misc: Object;
}

export type PokemonDocument = mongoose.Document & IPokemon;

const StatsSchema = new instance.Schema({
    hp: String,
    attack: String,
    defense: String,
    spattack: String,
    spdefense: String,
    speed: String,
})

const defaultStats = {
    hp: "50",
    attack: "50",
    defense: "50",
    spattack: "50",
    spdefense: "50",
    speed: "50",
}

const LevelSchema = new instance.Schema({
    learnedat: String,
    name: String,
    gen: String,
})

const TmhmSchema = new instance.Schema({
    learnedat: String,
    name: String,
    gen: String,
})

const EggSchema = new instance.Schema({
    name: String,
    gen: String,
})

const TutorSchema = new instance.Schema({
    name: String,
    gen: String,
})

const Gen34Schema = new instance.Schema({
    name: String,
    method: String,
})

const MovesSchema = new instance.Schema({
    level: [LevelSchema],
    tmhm: [TmhmSchema],
    egg: [EggSchema],
    tutor: [TutorSchema],
    gen34: [Gen34Schema],
})

const DamagesSchema = new instance.Schema({
    bug: String,
    dark: String,
    dragon: String,
    electric: String,
    fight: String,
    fire: String,
    flying: String,
    ghost: String,
    grass: String,
    ground: String,
    ice: String,
    normal: String,
    poison: String,
    psychic: String,
    rock: String,
    steel: String,
    water: String,
})

const SexSchema = new instance.Schema({
    male: Number,
    female: String,
})

const AbilitiesSchema = new instance.Schema({
    normal: [String],
    hidden: [String],
})

const MiscSchema = new instance.Schema({
    sex: SexSchema,
    abilities: AbilitiesSchema,
    classification: String,
    height: String,
    weight: String,
    capturerate: Number,
    eggsteps: String,
    expgrowth: String,
    happiness: String,
    evpoints: [String],
    fleeflag: String,
    entreeforestlevel: String,
})

const pokemonSchema = new instance.Schema({
    name: {type: String, required: true},
    id: {type: String, required: true},
    img: {type: String, required: true},
    type: {type: [String], required: true},
    stats: {type: StatsSchema, default: defaultStats},
    moves: {type: [MovesSchema], default: undefined},
    damages: {type: DamagesSchema, default: undefined},
    misc: {type: MiscSchema},
}, { collection: "pokemons"})

export const Pokemon = instance.model<any>('Pokemon', pokemonSchema);
