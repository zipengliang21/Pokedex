import {useEffect, useState} from "react";
const axios = require('axios');

const localhostURL = "http://localhost:5000";
const productionURL = "https://pokedex-455-server.herokuapp.com";


// Create a custom React Hook for Pokemon List
const usePokemonList = () => {
   const [pokemonList, setPokemonList] = useState([]);

   useEffect( () => {
      async function initialSet() {
         const initPokemonList = await getPokemonList();
         setPokemonList(initPokemonList);
      }
      initialSet();
   }, [])

   const getPokemon = async (_id: string) => {
      const response = await axios.get(`${productionURL}/pokemons/${_id}`);
      console.log(response.data.pokemon[0])
      return response.data.pokemon[0];
   }

   const getPokemonList = async () => {
      const response = await axios.get(`${productionURL}/pokemons/`);
      return response.data.pokemonList;
   }

   return {pokemonList, setPokemonList, getPokemon, getPokemonList}
}
export {usePokemonList};