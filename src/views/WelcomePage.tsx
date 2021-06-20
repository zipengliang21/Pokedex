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
      //background: #A1BDC6;
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  background-size: cover;
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
      width: 850px;
      margin: 0 auto;
      background: inherit;
      text-align: center;
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

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   font-weight: 600;
   color: rgba(71, 32, 121, 0.9);
   height: 40px;
   align-items: center;
   background: linear-gradient(90deg, rgba(177, 209, 202, 0.83) 20.21%, rgba(178, 223, 217, 0.79) 60.83%, #B2E6DF 78.85%);
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
