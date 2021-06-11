import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../components/FilterSearch/SearchBar";
import PokemonData from "../pokedexData.json";
import Pokemon from "../components/Pokemon";
import {Button} from "../components/Button";
import Fade from "react-reveal/Fade";

const Background = styled.div`
      background: #FBFAF6;
`;

const Wrapper = styled.div`
      width: 850px;
      margin: 0 auto;
      background: #FFFFFF;
      text-align: center;
      .search{
        text-align: center;
      }
      .home{
        margin-right: 5px;
      }
      .loadMore{
        margin-bottom: 50px;
      }
`;

const DecorationBar = styled.div`
  width: 750px;
  height: 25vh;
  margin: 0 auto;
  background-image: url("https://www.nintendo.com.au/web_images/pages/1939/attachments/attach1473204999.png");
  margin-bottom: 40px;
`;

const LoginDiv = styled.div`
    font-size: 18px;
    color: #212D3B;
    background: linear-gradient(112.93deg, #DCDECE 9.22%, rgba(53, 57, 30, 0.58) 70.36%);
    text-align: right;
    padding-right: 10px;
`;

const PokemonWrapper = styled.div`
    flex: 1;
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
`;

const GroupWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin: 100px auto;
    text-align: center;
`;

const WelcomePage = () => {
   return (
       <Background>
          <Wrapper>
             <LoginDiv className="login">
                <NavLink exact activeClassName="selected" to="/login">
                   <FontAwesomeIcon icon="home" className="home"/>
                   <span className="span">Login</span>
                </NavLink>
             </LoginDiv>
             <DecorationBar/>
             <div className="search">
                <SearchBar/>
             </div>
             <PokemonWrapper>
                <GroupWrapper>
                   {PokemonData.slice(0, 4).map((pokemon, index) => {
                      return <Fade left><Pokemon pokemon={pokemon} id={index}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(4, 8).map((pokemon, index) => {
                      return <Fade right><Pokemon pokemon={pokemon} id={index}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(8, 12).map((pokemon, index) => {
                      return <Fade left><Pokemon pokemon={pokemon} id={index}/></Fade>;
                   })}
                </GroupWrapper>
                <GroupWrapper>
                   {PokemonData.slice(12, 16).map((pokemon, index) => {
                      return <Fade right><Pokemon pokemon={pokemon} id={index}/></Fade>;
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
