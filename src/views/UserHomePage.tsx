import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../components/Common/SearchBar";
import PokemonData from "../pokedexData.json";
import Pokemon from "../components/DetailedView/Pokemon";
import {Button} from "../components/Button";
import Fade from "react-reveal/Fade";
import SideBar from "../components/Common/SideBar";

const Background = styled.div`
      background: #FBFAF6;
`;

const Wrapper = styled.div`
      display: flex;
      margin: 0 auto;
      background: #FFFFFF;
      .search{
        text-align: center;
      }
      .loadMore{
        margin-bottom: 50px;
      }
      @media(max-width: 875px){
        width: 418px;
        .search{
          margin-top: 75px;
        }
      }
      @media(max-width: 576px){
        width: 230px;
        .search{
          margin-top: 25px;
        }
      }
`;

const DecorationBar = styled.div`
  width: 750px;
  height: 320px;
  margin: 0 auto;
  background-image: url("https://www.nintendo.com.au/web_images/pages/1939/attachments/attach1473204999.png");
  margin-bottom: 40px;
  @media(max-width: 875px){
   width: 418px;
   display: none;
  }
`;

const HomeWrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

const PokemonWrapper = styled.div`
    flex: 1;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    @media(max-width: 875px){
      width: 418px;
      padding: 0 30px;
    }
`;

const GroupWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin: 100px auto;
    text-align: center;
    @media(max-width: 875px){
      margin: 50px auto;
    }
`;

const UserHomePage = () => {
   return (
       <Background>
          <Wrapper>
             <SideBar className="sideBar"/>
             <HomeWrapper>
                <DecorationBar/>
                <div className="search">
                   <SearchBar/>
                </div>
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
                   <Fade bottom>
                      <Button className="loadMore">Load More Pokemon</Button>
                   </Fade>
                </PokemonWrapper>
             </HomeWrapper>
          </Wrapper>
       </Background>
   );
};

export default UserHomePage;
