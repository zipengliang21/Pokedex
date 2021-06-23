import React from 'react';
import styled from "styled-components";
import CardColumns from 'react-bootstrap/CardColumns'
import PokemonCard from "./PokemonCard";
import SideBar from "./Common/SideBar";
import Container from 'react-bootstrap/Container'

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
min-height: 4rem;
-webkit-filter: none;
z-index: 1;
display:flex;
flex-direction:column;
margin-bottom:0px;
.bannerImg{
    width:100%;
    height:40vh;
}
.welcomeMsg{
    font-size: 2.5rem;
    text-align:center;
    color: #212D3B;
    background: #FBFAF6;
}
`;

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Header = styled.h1`
position: relative;
scroll-margin-top: 5rem;
font-size: 2.5rem;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
margin-bottom: 2rem;
font-weight: 500;
line-height: 1.2;
margin-top: 30px;
margin-left:120px;
color:black;
`;

const CollectionListDiv = styled.div`
position: relative;
margin-bottom: 3rem;
background-color: #fff;
flex: 1;
text-align: center;
max-width: 100%;
`;

const StyledCollumContainer = styled.div`
position: relative;
padding: 1rem;
margin-right: 0;
margin-left: 10px;
`;

const addPokemonCard = (card:PokemonCard)=>{

};

class Collection extends React.Component{
    render(){
        return(
            <Wrapper>
            <SideBar/>
            <CollectionContainer>
            <Banner role="banner">
            <a className="welcomeMsg" target="_blank" rel="noreferrer">Welcome to your collection!</a>
            </Banner>
            <Banner role="banner" >
            <img className="bannerImg" src="https://pokemongamesharkcodes.files.wordpress.com/2016/09/banner-pokemon.png" alt="logo" />
            </Banner>
            <Container fluid>
                <Header>Collected Pokemon </Header>
                <ContentWrapper>
                <CollectionListDiv>
                    <StyledCollumContainer>
                    <CardColumns style={{
                        position: "relative",
                        display: "block", 
                        width: "100%",
                        columnCount:3,
                        columnGap: "1.5rem",
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
        );
    }
}

export default Collection;