import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const PokemonWrapper = styled.div`
    flex: 1;
    height: 300px;
    text-align: center;
    display: inline-block;
    .number{
      color:#8A8C7D;
    }
    .name{
      font-weight: 600;
    }
`;

const Pokemon = ({pokemon, id}: any) => {
   return (
       <PokemonWrapper>
          <NavLink to={`/pokemon/${id}`}>
             <div className="cover">
                <img src={pokemon.img}
                     width={150}
                     height={150}
                     alt={""}/>
             </div>
             <div className="number">{`#` + pokemon.id}</div>
             <div className="name">{pokemon.name}</div>
          </NavLink>
       </PokemonWrapper>
   );

};
export default Pokemon;