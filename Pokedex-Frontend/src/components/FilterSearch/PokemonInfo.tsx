import React, {useEffect} from "react";
import styled from "styled-components";
import {usePokemonList} from "../../hooks/usePokemonList";
import {FormattedMessage} from "react-intl";
import Spinner from "components/Common/Spinner";

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

const PokemonInfo = (props: any) => {
    const {pokemon, setPokemon} = usePokemonList();

    const init = async () => {
        const data = await props.getPokemon(props.id);
        setPokemon(data);
    };

    useEffect(() => {
        init();
    });

    return pokemon ? (
        <InfoWrapper>
            <ContentWrapper>
                <HeaderWrapper>
                    <HeaderSubWrapper>
                        <header>{pokemon.name}</header>
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
                        {pokemon.type.map((pokeType: any, index: number) => {
                            return <label key={index.toString()}><FormattedMessage id={`${pokeType}`}/></label>;
                        })}

                    </ImageWrapper>
                    <StatWrapper>
                        <div className="InfoRow1">
                            <FormattedMessage id="Normal_Ability"/>: {pokemon.misc.abilities.normal} <br/>
                            <FormattedMessage id="Hidden_Ability"/>: {pokemon.misc.abilities.hidden} <br/>
                            <div className="bodySize">
                                <span><FormattedMessage id="Height"/>: {pokemon.misc.height} </span>
                                <span><FormattedMessage id="Weight"/>: {pokemon.misc.weight} <br/></span>
                            </div>
                        </div>
                        <div className="InfoRow2">
                            <FormattedMessage id="Stat"/>:
                            <ul className="InfoRow2Data">
                                <div>
                                    <li>
                            <span><FormattedMessage id="Hp"/>:
                                {pokemon.stats.hp}
                            </span>
                                    </li>
                                    <li>
                            <span><FormattedMessage id="Sp_Attack"/>:
                                {pokemon.stats.spattack}
                            </span>
                                    </li>
                                    <li>
                            <span><FormattedMessage id="Sp_Def"/>:
                                {pokemon.stats.defense}
                            </span>
                                    </li>
                                </div>
                                <div className="BaseStat">
                                    <li>
                            <span><FormattedMessage id="Attack"/>:
                                {pokemon.stats.attack}
                            </span>
                                    </li>
                                    <li>
                            <span><FormattedMessage id="Sp_Defense"/>:
                                {pokemon.stats.spdefense}
                            </span>
                                    </li>
                                    <li>
                            <span><FormattedMessage id="Speed"/>:
                                {pokemon.stats.speed}
                            </span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </StatWrapper>
                </DataWrapper>
            </ContentWrapper>
        </InfoWrapper>
    ) : <Spinner/>;
};

export default PokemonInfo;