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

   const getPokemon = async (_id: string) => {
      const response = await axios.get(`${localhostURL}/pokemons/${_id}`);
      return response.data.pokemon[0];
   }

   const getPokemonList = async () => {
      const response = await axios.get(`${localhostURL}/pokemons/`);
      return response.data.pokemonList;
   }

   return {pokemonList, setPokemonList, pokemon, setPokemon, getPokemon, getPokemonList}
}
export {usePokemonList};