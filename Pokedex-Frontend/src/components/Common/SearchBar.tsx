import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Pokemon from "../DetailedView/Pokemon";

const SearchBarWrapper = styled.div`
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  padding: 20px 0;
  text-align: center;
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
      width: 418px;
      display: block;
      .search{
       margin-top: 75px;
     }
   }
   @media(max-width: 576px){
     width: 100%;
     display: block;
     .search{
       margin-top: 25px;
     }
     .left{
      margin-left: 0;
      text-align: center;
       #search, .note{
         width: 100%;
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
       width: 100%;
       padding: 0;
       background: #59B937;
       color: white;
       border-radius: 0;
       text-align: center;
     }
   }
`;


const PokemonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
    padding: 15px;
    @media(max-width: 875px){
      width: 418px;
      padding: 15px 40px;
    }
    @media(max-width: 576px){
     width: 100%;
     padding: 15px 40px;
   }
`;

const ResultWrapper = styled.div`
  background: white;
  mix-blend-mode: normal;
  color: blue;
`;

const SearchBarResultWrapper = styled.div`
    width: 850px;
    margin: 0 auto;
    background: inherit;
    text-align: center;
    @media(max-width: 875px){
      width: 418px;
      display: block;
    }
   @media(max-width: 576px){
     width: 100%;
     display: block;
   }
`;


function SearchBar(props: any) {
    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([{id: "",_id:"",
        name: "",
        img: "",
        type: [
            ''
        ]}]);
    const [filteredPokemons, setfilteredPokemons] = useState([{name:"", _id:""}]);


    useEffect(() => {
        setPokemons(props.pokemonList);
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
                    </form>
                    <div className="note">Use the Advanced Search to explore Pokemon by different filters</div>
                </div>
                <div className="right">Search for a Pokemon by name or using its National Pokedex number.</div>

            </SearchBarWrapper>
            <ResultWrapper>
                <PokemonWrapper>
                    {filteredPokemons.map((pokemon, index) => {
                        if (pokemon.name === ""){return <> </>}
                        else {
                            return  <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon._id}/></Fade>;
                        }})}
                </PokemonWrapper>
            </ResultWrapper>
        </SearchBarResultWrapper>

    )

}


export default SearchBar;
