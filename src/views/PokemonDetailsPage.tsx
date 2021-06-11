import React from "react";
import styled from "styled-components";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../components/FilterSearch/SearchBar";
import PokemonData from "../pokedexData.json";

const Wrapper = styled.div`
      width: 850px;
      margin: 0 auto;
      background: #FFFFFF;
      text-align: center;
`;
const Background = styled.div`
      background: #FBFAF6;
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 18px;
   color: #212D3B;
   background: linear-gradient(112.93deg, #DCDECE 9.22%, rgba(53, 57, 30, 0.58) 70.36%);
   .home{
       margin-left: 40px;
   }
   .login{
       margin-right: 50px;
   }
   .home{
     margin-right: 5px;
   }
   .user{
     margin-right: 5px;
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

function PokemonDetailsPage({pokemon}: any) {
   const index = pokemon.id;
   return (
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
          <div>
            <PokemonInfo pokemon={pokemon}/>
          </div>
       </Wrapper>
   );
}

export default PokemonDetailsPage;