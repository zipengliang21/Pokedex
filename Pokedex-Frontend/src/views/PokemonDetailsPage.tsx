import React from "react";
import styled from "styled-components";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";
import DetailPageHeader from "../components/DetailedView/DetailPageHeader";

const Wrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   background: inherit;
   padding-bottom: 100px;
   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

function PokemonDetailsPage(props: any) {
    return (
        <Wrapper>
            <DetailPageHeader/>
            <PokemonInfo id={props._id}
                         getPokemon={props.getPokemon}/>
        </Wrapper>
    );
}

export default PokemonDetailsPage;