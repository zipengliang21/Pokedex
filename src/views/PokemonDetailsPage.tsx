import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import SearchBar from "../components/Common/SearchBar";
import {usePokemonList} from "../hooks/usePokemonList";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

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
   const [pickedPokemon, setPickedPokemon] = useState({});
   const {getPokemon} = usePokemonList();
   const init = async () => {
      const data = await getPokemon(props._id);
      setPickedPokemon(data);
   }
   useEffect(() => {
      init();
   }, [])
   return (
       <Background>
          <Wrapper>
             <Header/>
             <NavBar/>
             <SearchBar/>
             <PokemonInfo pokemon={pickedPokemon}/>
          </Wrapper>
       </Background>
   );
}

export default PokemonDetailsPage;