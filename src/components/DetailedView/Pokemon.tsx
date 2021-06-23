import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const PokemonWrapper = styled.div`
    flex: 1;
    width: 25%;
    min-width: 25%; 
    max-width: 25%; 
    height: 350px;
    text-align: center;
    display: inline-block;
    .number{
      color:#8A8C7D;
    }
    .name{
      font-weight: 600;
    }
`;

const Pokemon = ({pokemon, key}: any) => {
   return (
       <PokemonWrapper>
          <NavLink to={`/pokemon/${pokemon.id}`}>
             <div className="cover">
                <img src={pokemon.img}
                     width={150}
                     height={150}
                     alt={"Pokemon"}/>
             </div>
             <div className="number">{`#` + pokemon.id}</div>
             <div className="name">{pokemon.name}</div>
          </NavLink>
       </PokemonWrapper>
   );

};
export default Pokemon;