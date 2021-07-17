import {useEffect, useState} from "react";
const axios = require('axios');

const localhostURL = "http://localhost:5000";
const productionURL = "https://pokedex-455-server.herokuapp.com";


// Create a custom React Hook for Pokemon List

interface Pokemon {
   name: string;
   id: string;
   img: string;
   type: Array<string>;
   stats: any;
   moves: any;
   damages: any;
   misc: any;
}

const usePokemonList = () => {
   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
   const [pokemon, setPokemon] = useState<Pokemon | null>(null);

   useEffect( () => {
      async function initialSet() {
         const initPokemonList = await getPokemonList();
         setPokemonList(initPokemonList);
      }
      initialSet();
   }, [])

   const addPokemon = async (name: string, type: string, abilities: string, hiddenAbility: string,
                             height: string, weight: string, baseHp: string, baseAttack: string, baseSpAtk: string,
                             baseSpDef: string, baseDefence: string, baseSpeed: string,) => {

      let data = {
         name: name,
         type: type,
         abilities: abilities,
         hiddenAbility: hiddenAbility,
         height: height,
         weight: weight,
         baseHp: baseHp,
         baseAttack: baseAttack,
         baseSpAtk: baseSpAtk,
         baseSpDef: baseSpDef,
         baseDefence: baseDefence,
         baseSpeed: baseSpeed,
      }
      await axios.post(`${localhostURL}/pokemons/`, data);
      setPokemonList(await getPokemonList());

   }
   const deletePokemon =  async (id: string, name: string) => {
      let deleteInfo = {id: id, name: name};
      const response = await axios.delete(`${localhostURL}/pokemons/${id}`, {data:deleteInfo});
      if (response.status === 204) {
         setPokemonList(await getPokemonList());
      }
      return response.status;
   }
   const getPokemon = async (_id: string) => {
      const response = await axios.get(`${localhostURL}/pokemons/${_id}`);
      return response.data.pokemon[0];
   }

   const getPokemonList = async () => {
      const response = await axios.get(`${localhostURL}/pokemons/`);
      return response.data.pokemonList;
   }

   return {pokemonList, setPokemonList, pokemon, setPokemon,deletePokemon, addPokemon, getPokemon, getPokemonList}
}
export {usePokemonList};