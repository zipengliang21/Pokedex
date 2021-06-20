import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../components/Common/SearchBar";
import PokemonData from "../pokedexData.json";
import Pokemon from "../components/DetailedView/Pokemon";
import {Button} from "../components/Button";
import Fade from "react-reveal/Fade";

const Background = styled.div`
      background: #FBFAF6;
`;

const Wrapper = styled.div`
      width: 850px;
      margin: 0 auto;
      background: #FFFFFF;
      // text-align: center;
      .search{
        // text-align: center;
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

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 18px;
   color: #212D3B;
   background: linear-gradient(112.93deg, #DCDECE 9.22%, rgba(53, 57, 30, 0.58) 70.36%);
   .home{
       margin: 0 5px 0 40px
   }
   .login{
       margin-right: 50px;
   }
   .user{
      margin-right: 5px;
   }
   @media(max-width: 576px){
      justify-content: center;
      .home{
        margin: 0 5px 0 0;
      }
      .login{
       margin: 0 0 0 5px;
      }
   }
`;

const PokemonWrapper = styled.div`
    flex: 1;
    width: 700px;
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

const WelcomePage = () => {
   return (
       <Background>
          <Wrapper>
             <Header>
                <NavLink exact activeClassName="selected" to="/" className="home">
                   <FontAwesomeIcon icon="home" className="home"/>
                   <span className="span">Home</span>
                </NavLink>
                <NavLink exact activeClassName="selected" to="/login" className="login">
                   <FontAwesomeIcon icon="user" className="user"/>
                   <span className="span">Login</span>
                </NavLink>
             </Header>
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
             </PokemonWrapper>
             <Fade bottom>
                <Button className="loadMore">Load More Pokemon</Button>
             </Fade>
          </Wrapper>
       </Background>
   );
};

export default WelcomePage;
