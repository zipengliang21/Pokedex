import styled from "styled-components";
import SideBar from "../components/Common/SideBar";
import SearchBar from "../components/Common/SearchBar";
// import DecorationBar from "../components/FilterSearch/DecorationBar";
import CheckBoxType from "../components/FilterSearch/CheckBoxType";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import PokemonData from "../pokedexData.json";
import React, {useState, useEffect} from "react";
import {types} from "util";
import Fade from "react-reveal/Fade";
import Pokemon from "../components/DetailedView/Pokemon";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const FilterSearchWrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   background: inherit;
   text-align: center;
`;

const FilterSearchContentWrapper = styled.section`
    display: flex;
    width: 850px;
    flex: auto;
    flex-direction: column;
    // min-height: 0;
    // width: 850px;
     margin: 0 auto;
     background: inherit;
     text-align: center;
    
     @media(max-width: 875px){
       width: 418px;
     }
     @media(max-width: 576px){
       width: 100%;
     }
    
`
// const Background = styled.div`
//    background: #f0f2f5 url("https://www.teahub.io/photos/full/206-2063227_free-christmas-background-christmas-background-light-blue.jpg");
//    background-size: cover;
// `


const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    //background: #FCFCFC;
    // text-align: center;
   
`
const PokemonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
    @media(max-width: 875px){
      width: 418px;
      padding: 0 30px;
    }
`;


function FilterSearchPage() {
    const [filteredPokes, setFilteredPokes] = useState([{name:"",id:""}]);

    return (
        <Background>
            <FilterSearchWrapper>
                <FilterSearchContentWrapper>
                    {/*<DecorationBar/>*/}
                    <Header/>
                    <NavBar/>
                    <SearchBar className="search"/>
                    <PokemonWrapper>
                        {filteredPokes.map((pokemon, index) => {
                            if (pokemon.name === ""){return <> </>}
                            else {
                                return <Fade left key={pokemon.name}><Pokemon pokemon={pokemon} id={pokemon.name}/></Fade>;
                            }})}
                    </PokemonWrapper>
                    <FilterWrapper>
                        <CheckBoxType
                            handleTypes={typeFilter}
                        />
                    </FilterWrapper>
                </FilterSearchContentWrapper>

            </FilterSearchWrapper>
        </Background>
    )

    function typeFilter (normal:boolean, fire:boolean, water:boolean, grass:boolean, flying:boolean,
                         fighting:boolean, poison:boolean, electric:boolean, ground:boolean, rock:boolean,
                         psychic: boolean, ice: boolean, bug: boolean, ghost: boolean, steel: boolean,
                         dragon: boolean, dark: boolean, fairy: boolean,
                         HeightLittle:boolean, HeightMedium: boolean, HeightTall: boolean,
                         WeightLight: boolean, WeightMedium: boolean, WeightHeavy: boolean) {
        let result = [];
        let res: any[] = [];

        if (normal){
            for (let poke of PokemonData) {
                if(poke.type.includes("Normal")  && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (fire){
            for (let poke of PokemonData) {
                if(poke.type.includes("Fire") && result.indexOf(poke) === -1){
                    // setFilteredPokes([ ...filteredPokes, poke]);
                    result.push(poke);
                }
            }
        }
        if (water){
            for (let poke of PokemonData) {
                if(poke.type.includes("Water") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (grass){
            for (let poke of PokemonData) {
                if(poke.type.includes("Grass") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (flying){
            for (let poke of PokemonData) {
                if(poke.type.includes("Flying") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (fighting){
            for (let poke of PokemonData) {
                if(poke.type.includes("Fighting") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (poison){
            for (let poke of PokemonData) {
                if(poke.type.includes("Poison") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (electric){
            for (let poke of PokemonData) {
                if(poke.type.includes("Electric") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (ground){
            for (let poke of PokemonData) {
                if(poke.type.includes("Ground") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (rock){
            for (let poke of PokemonData) {
                if(poke.type.includes("Rock")  && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (psychic){
            for (let poke of PokemonData) {
                if(poke.type.includes("Psychic") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (ice){
            for (let poke of PokemonData) {
                if(poke.type.includes("Ice")  && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (ghost){
            for (let poke of PokemonData) {
                if(poke.type.includes("Ghost") && result.indexOf(poke) === -1){
                    // setFilteredPokes([ ...filteredPokes, poke]);
                    result.push(poke);
                }
            }
        }
        if (bug){
            for (let poke of PokemonData) {
                if(poke.type.includes("Bug" ) && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (steel){
            for (let poke of PokemonData) {
                if(poke.type.includes("Steel") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (dragon){
            for (let poke of PokemonData) {
                if(poke.type.includes("Dragon")  && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (dark){
            for (let poke of PokemonData) {
                if(poke.type.includes("Dark")  && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (fairy){
            for (let poke of PokemonData) {
                if(poke.type.includes("Fairy") && result.indexOf(poke) === -1){
                    result.push(poke);
                    // setFilteredPokes([ ...filteredPokes, poke]);
                }
            }
        }
        if (!HeightLittle && !HeightMedium &&!HeightTall && !WeightLight && !WeightMedium &&
            !WeightHeavy ){
            res = result;
        }
        if (HeightLittle){
            for (let poke of result){
                if (parseInt(poke.misc.height.split("'")[0]) <= 5 ){
                    res.push(poke);

                }
            }
        }
        if (HeightMedium){
            for (let poke of result){
                if (parseInt(poke.misc.height.split("'")[0]) <= 11 &&
                    parseInt(poke.misc.height.split("'")[0]) > 5){
                    res.push(poke);

                }
            }
        }
        if (HeightTall){
            for (let poke of result){
                if (parseInt(poke.misc.height.split("'")[0]) > 11) {
                    res.push(poke);

                }
            }
        }
        if (WeightLight){
            for (let poke of result){
                if (parseFloat(poke.misc.weight) <= 100.00) {
                    res.push(poke);
                }
            }
        }
        if (WeightMedium){
            for (let poke of result){
                if (parseFloat(poke.misc.weight) <= 200.00 && parseFloat(poke.misc.weight) > 100.00) {
                    res.push(poke);
                }
            }
        }
        if (WeightHeavy){
            for (let poke of result){
                if (parseFloat(poke.misc.weight) > 200.00) {
                    res.push(poke);
                }
            }
        }

        setFilteredPokes(res);


    }

}

export default FilterSearchPage;
