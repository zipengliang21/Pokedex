import React from "react";
import styled from "styled-components";
import FavButton from "components/Common/FavButton"
import Fade from "react-reveal/Fade";
import Pokemon from "../DetailedView/Pokemon";

const InfoWrapper = styled.div`
  width: 750px;
  min-height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(63.06deg, #C9B5E3 0%, rgba(153, 192, 222, 0.8) 100%);
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

const ContentWrapper = styled.div`
    margin: 0 auto;
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
    margin: 0 0 15px 60px;
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

const HeaderWrapper = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left:10px;
   @media(max-width: 576px){
     text-align: center;
     margin: 0;
   } 
`;

const HeaderSubWrapper = styled.div`
  display: flex;
  @media(max-width: 576px){
     text-align: center;
     flex-direction: column;
  } 
`;

const StarWrapper =styled.div`
  margin: 63px 0 0 10px;
  color: yellow;
  @media(max-width: 576px){
    margin: 0;
  } 
`;

const PokemonInfo = ({pokemon}: any) => {
   return (
       <InfoWrapper>
         <ContentWrapper>
            <HeaderWrapper>
               <HeaderSubWrapper>
                  <header>{pokemon.name}</header>
                  <StarWrapper>
                     <FavButton className="Fav" pId={pokemon.id} pName ={pokemon.name}/>
                  </StarWrapper>
               </HeaderSubWrapper>
               <div className="pokeID">{`#` + pokemon.id}</div>
            </HeaderWrapper>
            <DataWrapper>
               <ImageWrapper>
                  <img src={pokemon.img}
                       alt={`pikachu`}
                       width={150}
                       height={150}
                  />
                  <div>{pokemon.name}</div>
                  {/*{pokemon.type.map((pokeType:any) => {*/}
                   {/*   return <label>{pokeType}</label>;*/}
                  {/*})}*/}

               </ImageWrapper>
               <StatWrapper>
                  <div className="InfoRow1">
                     {/*Species: {pokemon.misc.classification} <br/>*/}
                     {/*Abilities: {dummyData[0]["Pokedex Data"]["Abilities"]} <br/>*/}
                     {/*Normal Abilities: {pokemon.misc.abilities.normal} <br/>*/}
                     {/*Hidden Abilities: {pokemon.misc.abilities.hidden} <br/>*/}
                     <div className="bodySize">
                        {/*<span>Height: {pokemon.misc.height} </span>*/}
                        {/*<span>Weight: {pokemon.misc.weight} <br/></span>*/}
                     </div>
                  </div>
                  <div className="InfoRow2">
                     {/*Base/Min/Max:*/}
                     Stats:
                     <ul className="InfoRow2Data">
                        <div >
                           <li>
                            <span>HP:
                               {/*{dummyData[0]["Base Stats"]["HP"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["HP"]["Min"]}/*/}
                               {/*{pokemon.stats.hp} */}
                            </span>
                           </li>
                           <li>
                            <span>Sp Attack:
                               {/*{dummyData[0]["Base Stats"]["Sp Atk"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["Sp Atk"]["Min"]}/*/}
                               {/*{pokemon.stats.spattack}*/}
                            </span>
                           </li>
                           <li>
                            <span>Defense:
                               {/*{dummyData[0]["Base Stats"]["Defense"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["Defense"]["Min"]}/*/}
                               {/*{pokemon.stats.defense}*/}
                            </span>
                           </li>
                        </div>
                        <div className="BaseStat">
                           <li>
                            <span>Attack:
                               {/*{dummyData[0]["Base Stats"]["Attack"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["Attack"]["Min"]}/*/}
                               {/*{pokemon.stats.attack}*/}
                            </span>
                           </li>
                           <li>
                            <span>Sp Defense:
                               {/*{dummyData[0]["Base Stats"]["Sp Def"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["Sp Def"]["Min"]}/*/}
                               {/*{pokemon.stats.spdefense}*/}
                            </span>
                           </li>
                           <li>
                            <span>Speed:
                               {/*{dummyData[0]["Base Stats"]["Speed"]["Base"]}/*/}
                               {/*{dummyData[0]["Base Stats"]["Speed"]["Min"]}/*/}
                               {/*{pokemon.stats.speed}*/}
                            </span>
                           </li>
                        </div>
                     </ul>
                  </div>
               </StatWrapper>
            </DataWrapper>
         </ContentWrapper>
       </InfoWrapper>
   );
};

export default PokemonInfo;