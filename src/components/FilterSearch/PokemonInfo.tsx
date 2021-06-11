import React from "react";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const InfoWrapper = styled.div`
  width: 850px;
  display: flex;
  flex-direction: row;
  margin: 100px auto 0 auto;
  align-items: center;
  background: white;
  img{
    margin: 0 100px 0 0;
  }
  header{
    margin: 100px 0 0 200px;
    font-weight: 600;
    font-size: 36px;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    .InfoColumn2{
      display: flex;
      flex-direction: row;
      text-align: center;
    }
    .BaseStat{
      display: flex;
      margin: 20px;
      text-align: right;
      align-items: center;
      span{
        margin-right: 10px;
      }
    }
`;

const CollectionButtonStyle = styled.button`
  font-size: 30px;
  font-weight: bold;
  padding: 16px;
  border: none;
  background-image: linear-gradient(
    rgba(245, 211, 124, 1),
    rgba(135, 211, 124, 0.1)
  );
`;

const data = `
   [
       {
       "Pokemon": "Pikachu",
        "Artwork": "025.jpg",
        "Pokedex Data": {
            "National No": 25,
            "Type": [
                "Electric"
            ],
            "Species": "Mouse Pokemon",
            "Height": 0.4,
            "Weight": 6.0,
            "Abilities": [
                "Static",
                "Lightning Rod"
            ],
            "Local No": [
                25,
                22,
                156,
                25,
                104,
                104,
                22,
                36,
                163,
                25,
                32,
                25,
                194
            ]
        },
        "Training": {
            "EV Yield": [
                "2 Speed"
            ],
            "Catch Rate": 190,
            "Base Friendship": 70,
            "Base Exp": 112,
            "Growth Rate": "Medium Fast"
        },
        "Breeding": {
            "Egg Groups": [
                "Fairy",
                "Field"
            ],
            "Gender": {
                "male": 50.0,
                "female": 50.0
            },
            "Egg Cycles": 10
        },
        "Base Stats": {
            "HP": {
                "Base": 35,
                "Min": 180,
                "Max": 274
            },
            "Attack": {
                "Base": 55,
                "Min": 103,
                "Max": 229
            },
            "Defense": {
                "Base": 40,
                "Min": 76,
                "Max": 196
            },
            "Sp Atk": {
                "Base": 50,
                "Min": 94,
                "Max": 218
            },
            "Sp Def": {
                "Base": 50,
                "Min": 94,
                "Max": 218
            },
            "Speed": {
                "Base": 90,
                "Min": 166,
                "Max": 306
            }
        }
    }
   ]
`;

const PokemonInfo = ({pokemon}: any) => {
   console.log(pokemon)
   const [collect, setCollect] = useState("");
   const dummyData = JSON.parse(data);
   return (
       <InfoWrapper>
          <img src={pokemon.img}

               alt={`pikachu`}
               width={285}
               height={285}/>
          <div>
             <header>{pokemon.name}</header>
             <DataWrapper>
                <div className={"InfoColumn1"}>
                   National No: {pokemon.id} <br/>
                   Type: {dummyData[0]["Pokedex Data"].Type} <br/>
                   Species: {dummyData[0]["Pokedex Data"].Species} <br/>
                   Height: {dummyData[0]["Pokedex Data"].Height} <br/>
                   Weight: {dummyData[0]["Pokedex Data"].Weight} <br/>
                   Abilities: {dummyData[0]["Pokedex Data"]["Abilities"]} <br/>
                </div>
                <div>
                   {/*Base Stats: <br/>*/}
                   <ul className={"InfoColumn2"}>
                      <li>
                         <li className={"BaseStat"}>
                            <span>HP:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["HP"]["Base"]} <br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["HP"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["HP"]["Max"]} <br/></li>
                            </ul>
                         </li>
                         <li className={"BaseStat"}>
                            <span>Sp Atk:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["Sp Atk"]["Base"]} <br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["Sp Atk"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["Sp Atk"]["Max"]} <br/></li>
                            </ul>
                         </li>
                         <li className={"BaseStat"}>
                            <span>Defense:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["Defense"]["Base"]} <br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["Defense"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["Defense"]["Max"]} <br/></li>
                            </ul>
                         </li>
                      </li>
                      <li>
                         <li className={"BaseStat"}>
                            <span>Attack:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["Attack"]["Base"]}<br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["Attack"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["Attack"]["Max"]} <br/></li>
                            </ul>
                         </li>
                         <li className={"BaseStat"}>
                            <span>Sp Def:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["Sp Def"]["Base"]} <br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["Sp Def"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["Sp Def"]["Max"]} <br/></li>
                            </ul>
                         </li>
                         <li className={"BaseStat"}>
                            <span>Speed:</span>
                            <ul>
                               <li>Base:{dummyData[0]["Base Stats"]["Speed"]["Base"]} <br/></li>
                               <li>Min:{dummyData[0]["Base Stats"]["Speed"]["Min"]} <br/></li>
                               <li>Max:{dummyData[0]["Base Stats"]["Speed"]["Max"]}<br/></li>
                            </ul>
                         </li>
                      </li>
                   </ul>
                </div>
             </DataWrapper>
          </div>

       </InfoWrapper>
   );
};

export default PokemonInfo;
