import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PokemonData from "../../pokedexData.json";
import Fade from "react-reveal/Fade";
import Pokemon from "../DetailedView/Pokemon";

const SearchBarWrapper = styled.div`
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  color: blue;
  padding: 20px 0;
  .left{
    text-align: left;
    margin-left: 80px;
    .title{
      font-size: 20px;
      color: #04266D;
      font-weight: bold;
    }
    .note{
      margin: 10px 0;
      width: 280px;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
  .right{
    display: flex;
    width: 400px;
    margin: auto;
    padding: 10px 0;
    background: #59B937;
    color: #FFFFFF;
    border-radius: 10px;
    align-items: center;
    text-align: center;
  }
  .searchButton{
    color: white;
    background: linear-gradient(90deg, rgba(116, 230, 154, 0.72) 0%, rgba(139, 212, 212, 0.920305) 51.43%);
    border-radius: 5px;
    margin-left: 10px;
    padding: 4px;
    border: none;
  }
  #search{
    border-radius: 5px;
    height: 28px;
    border: 3px solid #04266D;
  }
   @media(max-width: 875px){
      display: block;
   }
   @media(max-width: 576px){
     display: block;
     .left{
      margin-left: 0;
      text-align: center;
       .note{
         width: 230px;
       }
       div, form{
          margin: 5px auto;
       }
       button{
          display: flex;
          margin: 10px auto;
       }
     }
     .right{
       display: flex;
       width: 230px;
       padding: 0;
       background: #59B937;
       color: white;
       border-radius: 0;
       text-align: center;
     }
   }
`;

const PokemonWrapper = styled.div`
    // display: flex;
    flex: 1;
    // flex-direction: row;
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
    @media(max-width: 875px){
      width: 418px;
      // padding: 0 30px;
    }
`;



const ResultWrapper = styled.div`
  display: flex;
  background: white;
  mix-blend-mode: normal;
  color: blue;
  // padding: 20px 0;
`;

const SearchBarResultWrapper = styled.div`
    width: 850px;
    margin: 0 auto;
    background: inherit;
    text-align: center;
`;


// const  = [
//     "Siri",
//     "Alexa",
//     "Google",
//     "Facebook",
//     "Twitter",
//     "Linkedin",
//     "Sinkedin"
// ];
function SearchBar(props: any) {
    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([{id: "",
        name: "",
        img: "",
        type: [
            ''
        ]}]);
    const [filteredPokemons, setfilteredPokemons] = useState([{name:""}]);

    useEffect(() => {
        setPokemons(PokemonData);
    }, []);

    // const handleSubmit = (event: any) => {
    //     setSearch(event.target.value);
    //     // setfilteredPokemons(
    //     //     pokemons.filter((poke) =>
    //     //         poke.name.toLowerCase().includes(search.toLowerCase())
    //     //     )
    //     // );
    // };
    useEffect(() => {
        const result = pokemons.filter((poke) =>
            poke.name.toLowerCase().includes(search.toLowerCase())

        );
        if(search.length === 0){
            setfilteredPokemons([]);
        }
        else {
            setfilteredPokemons(result);
        }
    }, [search, pokemons]);
    return (
        <SearchBarResultWrapper>
        <SearchBarWrapper>
            <div className="left">
                <div className="title">Pokemon Name</div>
                <form>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search Pokemon names"
                        name="s"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/*<button onClick={handleSubmit} className="searchButton">*/}
                    {/*    <FontAwesomeIcon icon="search"/>*/}
                    {/*</button>*/}
                </form>
                <div className="note">Use the Advanced Search to explore Pokemon by different filters</div>
            </div>
            <div className="right">Search for a Pokemon by name or using its National Pokedex number.</div>

        </SearchBarWrapper>
         <ResultWrapper>
      <PokemonWrapper>
     {filteredPokemons.map((pokemon, index) => {
         return  <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
     })}
     </PokemonWrapper>
     </ResultWrapper>
        </SearchBarResultWrapper>

    )
}


export default SearchBar;