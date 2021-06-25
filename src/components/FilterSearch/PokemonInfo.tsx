import React from "react";
import styled from "styled-components";
import FavButton from "components/Common/FavButton"

const InfoWrapper = styled.div`
  width: 750px;
  min-height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(63.06deg, #AC85DE 0%, rgba(127, 176, 213, 0.8) 78.62%);
  border: 2px solid #80B1EC;
  header{
    margin-top: 50px;
    font-weight: 600;
    font-size: 28px;
    color: #04266D;
  }
  .pokeID{
    color: #262626;
    font-size: 18px;
  }
   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const DataWrapper = styled.div`
    display: flex;
    margin: 20px auto 0 auto;
    text-align: center;
    align-items: center;
    @media(max-width: 576px){
      display: flex;
      flex-direction: column;
      margin: 0;
   }
`;

const ImageWrapper = styled.div`
    text-align: center;
    img{
      border: 2px solid #80B1EC;
    }
    div{
      font-size: 18px;
      color: #04266D;
      font-weight: bold;
    }
    label{
      background-color: #9BCC50;
      color: white;
      border-radius: 5px;
      margin: 5px;
      padding: 4px 12px;
    }
    @media(max-width: 576px){
      margin: 0;
   }
`;

const StatWrapper = styled.div`
    margin-left: 50px;
    .InfoRow1{
      text-align: left;
      span{
        margin-right: 10px;
      }
    }
    .InfoRow2{
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-top: 20px;
      .InfoRow2Data{
        display: flex;
        flex-direction: row;
      }
      .BaseStat{
        padding-left: 20px;
      }
    }
    @media(max-width: 875px){
       margin-left: 10px;
    }
    @media(max-width: 576px){
       margin: 0;
       .InfoRow1{
          margin-top: 20px;
       }
       .InfoRow1, .InfoRow2{
         text-align: center;
       }
    }
`;
// cannot make the button style effect
const CollectionButtonStyle = styled.button`
  font-size: 30px;
  font-weight: bold;
  padding: 16px;
  border: none;
  background: -webkit-linear-gradient(
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

const HeaderWrapper = styled.div`
display: flex;
margin: 50px auto;
margin-bottom:0px;
flex-wrap: no-wrap;
flex-direction: row;
text-align: center;
`;

const NameWrapper = styled.div`
position: relative;
display:inline;
`;

const StarWrapper = styled.div`
margin-top: 63px;
margin-left:10px;
position: relative;
display:inline;
`;

const PokemonInfo = ({pokemon}: any) => {
   // const [collect, setCollect] = useState("");
   const dummyData = JSON.parse(data);
   return (
       <InfoWrapper>
          {/*<CollectionButtonStyle onClick={() => setCollect(dummyData[0]["Pokemon"])}>Collect!</CollectionButtonStyle>*/}
          <HeaderWrapper>
            <NameWrapper>
               <header>{pokemon.name}</header>
            </NameWrapper>
            <StarWrapper>
               <FavButton pId={pokemon.id} pName ={pokemon.name}></FavButton>
            </StarWrapper>
          </HeaderWrapper>
          <div className="pokeID">{`#` + pokemon.id}</div>
          <DataWrapper>
             <ImageWrapper>
                <img src={pokemon.img}
                     alt={`pikachu`}
                     width={150}
                     height={150}
                />
                <div>{pokemon.name}</div>
                <label>Grass</label>
                <label>Poisons</label>
             </ImageWrapper>
             <StatWrapper>
                <div className="InfoRow1">
                   Species: {dummyData[0]["Pokedex Data"].Species} <br/>
                   Abilities: {dummyData[0]["Pokedex Data"]["Abilities"]} <br/>
                   <div className="bodySize">
                      <span>Height: {dummyData[0]["Pokedex Data"].Height} </span>
                      <span>Weight: {dummyData[0]["Pokedex Data"].Weight} <br/></span>
                   </div>
                </div>
                <div className="InfoRow2">
                   Base/Min/Max:
                   <ul className="InfoRow2Data">
                      <div >
                         <li>
                            <span>HP: {dummyData[0]["Base Stats"]["HP"]["Base"]}/
                               {dummyData[0]["Base Stats"]["HP"]["Min"]}/
                               {dummyData[0]["Base Stats"]["HP"]["Max"]} </span>
                         </li>
                         <li>
                            <span>Sp Atk: {dummyData[0]["Base Stats"]["Sp Atk"]["Base"]}/
                               {dummyData[0]["Base Stats"]["Sp Atk"]["Min"]}/
                               {dummyData[0]["Base Stats"]["Sp Atk"]["Max"]}
                            </span>
                         </li>
                         <li>
                            <span>Defense: {dummyData[0]["Base Stats"]["Defense"]["Base"]}/
                               {dummyData[0]["Base Stats"]["Defense"]["Min"]}/
                               {dummyData[0]["Base Stats"]["Defense"]["Max"]}</span>
                         </li>
                      </div>
                      <div className="BaseStat">
                         <li>
                            <span>Attack: {dummyData[0]["Base Stats"]["Attack"]["Base"]}/
                               {dummyData[0]["Base Stats"]["Attack"]["Min"]}/
                               {dummyData[0]["Base Stats"]["Attack"]["Max"]}
                            </span>
                         </li>
                         <li>
                            <span>Sp Def: {dummyData[0]["Base Stats"]["Sp Def"]["Base"]}/
                               {dummyData[0]["Base Stats"]["Sp Def"]["Min"]}/
                               {dummyData[0]["Base Stats"]["Sp Def"]["Max"]}
                            </span>
                         </li>
                         <li>
                            <span>Speed: {dummyData[0]["Base Stats"]["Speed"]["Base"]}/
                               {dummyData[0]["Base Stats"]["Speed"]["Min"]}/
                               {dummyData[0]["Base Stats"]["Speed"]["Max"]}
                            </span>
                         </li>
                      </div>
                   </ul>
                </div>
             </StatWrapper>
          </DataWrapper>
       </InfoWrapper>
   );
};

export default PokemonInfo;

