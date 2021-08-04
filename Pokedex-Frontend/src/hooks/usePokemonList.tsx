import {useEffect, useState} from "react";
import swal from 'sweetalert';
const axios = require('axios');

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
         const response = await axios.post(`/api/pokemons/`, data);
         if (response.data) {
            setPokemonList(await getPokemonList());
            swal("add Pokemon successfully", "", "success");
         }else {
            swal("add Pokemon Failed", "", "warning");
         }

   }
   const deletePokemon =  async (id: string, name: string) => {
      let deleteInfo = {id: id, name: name};
      try{ const response = await axios.delete(`/api/pokemons/${id}`, {data:deleteInfo});
         if (response.status === 204) {
            setPokemonList(await getPokemonList());
            await swal("delete Pokemon successfully", "", "success");
         }
         return response.status;
      }catch (error){
         await swal("delete Pokemon Failed", "", "warning");
         return error.response.status;
      }

   }
   const getPokemon = async (_id: string) => {
      const response = await axios.get(`/api/pokemons/${_id}`);
      return response.data.pokemon[0];
   }

   const getPokemonList = async () => {
      const response = await axios.get(`/api/pokemons/`);
      return response.data.pokemonList;
   }

   return {pokemonList, setPokemonList, pokemon, setPokemon,deletePokemon, addPokemon, getPokemon, getPokemonList}
}
export {usePokemonList};