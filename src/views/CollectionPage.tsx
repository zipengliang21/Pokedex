import React from 'react';
import styled from "styled-components";
import CardColumns from 'react-bootstrap/CardColumns'
import PokemonCard from "../components/PokemonCard";
import Container from 'react-bootstrap/Container'
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
flex: auto;
width: 100%;
min-height: 100%;
`;

const CollectionContainer = styled.section`
display: flex;
flex: auto;
flex-direction: column;
min-height: 0;
background-size: cover;
`;

const Banner = styled.header`
width: 850px;
margin: 0 auto;
background: inherit;
text-align: center;
-webkit-filter: none;
z-index: 1;
display:flex;
flex-direction:column;
margin-bottom:0px;
.bannerImg{
    min-height: 4rem;
    width:100%;
    height:30vh;
}
.welcomeMsg{
    min-height: 3rem;
    font-size: 30px;
    text-align:center;
    color: #212D3B;
    background: #EFD1C6;
}
`;

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 850px;
margin: 0 auto;
text-align: center;
`;

const CollectionListDiv = styled.div`
position: relative;
margin-bottom: 3rem;
background-color: #fff;
flex: 1;
text-align: center;
max-width: 100%;
background: linear-gradient(90deg, rgba(177, 209, 202, 0.83) 20.21%, rgba(178, 223, 217, 0.79) 60.83%, #B2E6DF 78.85%);
`;

const StyledCollumContainer = styled.div`
position: relative;
padding: 1rem;
margin-right: 0;
margin-left: 10px;
`;

const addPokemonCard = (card:PokemonCard)=>{

};

class CollectionPage extends React.Component{
    render(){
        return(
            <Background>
            <LogoutHeader/>
            <NavBar/>
            <Wrapper>
            <CollectionContainer>
            <Banner role="banner">
            <a className="welcomeMsg" target="_blank" rel="noreferrer">Welcome to your collection!</a>
            </Banner>
            <Banner role="banner" >
            <img className="bannerImg" src="https://pokemongamesharkcodes.files.wordpress.com/2016/09/banner-pokemon.png" alt="logo" />
            </Banner>
            <Container fluid>
                <ContentWrapper>
                <CollectionListDiv>
                    <StyledCollumContainer>
                    <CardColumns style={{
                        position: "relative",
                        display: "block", 
                        width: "100%",
                        columnCount:3,
                        columnGap: "1.2rem",
                        orphans: 1,
                        widows: 1,
                    }}>
                    <PokemonCard picName="pikachuu" picSource="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" description="sample meme for testing" />
                    <PokemonCard picName="pikachuu" picSource="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" description="sample meme for testing" />
                    <PokemonCard picName="pikachuu" picSource="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" description="sample meme for testing" />
                    <PokemonCard picName="Squirtle" picSource="https://qq.yh31.com/tp/zjbq/202005232131315944.jpg" description="sample meme for testing" />
                    <PokemonCard picName="Squirtle" picSource="https://qq.yh31.com/tp/zjbq/202005232131315944.jpg" description="sample meme for testing" />
                    <PokemonCard picName="Squirtle" picSource="https://qq.yh31.com/tp/zjbq/202005232131315944.jpg" description="sample meme for testing" />
                    </CardColumns>
                    </StyledCollumContainer>
                </CollectionListDiv>
                </ContentWrapper>
                </Container>
            </CollectionContainer>
            </Wrapper>
            </Background>
        );
    }
}

export default CollectionPage;