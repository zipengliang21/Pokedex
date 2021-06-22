import React from "react";
import styled from "styled-components";
import SearchBar from "../components/Common/SearchBar";
import PokemonData from "../pokedexData.json";
import Pokemon from "../components/DetailedView/Pokemon";
import {Button} from "../components/Button";
import Fade from "react-reveal/Fade";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";

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
      text-align: center;
      .loadMore{
        margin: 50px auto;
      }
      @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 230px;
      }
`;

const PokemonWrapper = styled.div`
    background: white;
    width: 750px;
    max-width: 100%;
    margin: 0 auto;
    padding: 15px;
    @media(max-width: 875px){
      width: 418px;
      padding: 0 40px;
    }
`;

const GroupWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin: 75px auto;
    text-align: center;
    @media(max-width: 875px){
      margin: 50px auto;
    }
`;

const WelcomePage = () => {
   return (
       <Background>
          <Wrapper>
             <Header/>
             <NavBar/>
             <SearchBar/>
             <PokemonWrapper>
                <GroupWrapper>
                   {PokemonData.slice(0, 4).map((pokemon, index) => {
                      return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(4, 8).map((pokemon, index) => {
                      return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(8, 12).map((pokemon, index) => {
                      return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(12, 16).map((pokemon, index) => {
                      return <Fade right key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
                   })}
                </GroupWrapper>
             </PokemonWrapper>
             <Fade bottom>
                <Button className="loadMore">Load More Pokemon</Button>
             </Fade>
          </Wrapper>
       </Background>
   );
};

export default WelcomePage;
