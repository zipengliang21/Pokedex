import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from "styled-components";
import CardColumns from 'react-bootstrap/CardColumns'
import PokemonCard from "./PokemonCard";

const CollectionContainer = styled.div`
    position: absolute;
    float: left;
    top: 0px;
    width: 1236px;
    height:1000px;
    margin-left:300px;
`;

const CollectionUserDiv = styled.div`
position: absolute;
float: left;
top: 20px;
width: 136px;
margin-left:300px;
text-align:center;
`;

const CollectionListDiv = styled.div`
width: 1536px;
float: left;
margin-top: 20px;
margin-left:300px;
text-align:center;
position: relative;
padding: 1rem;
border: .2rem solid #ececec;
border-radius: 8px;
margin-right: 0;
color: #212529;
height:1000px;
`;
const StyledCollumContainer = styled.div`
    height:1000px;
`;

const addPokemonCard = (card:PokemonCard)=>{

};

class Collection extends React.Component{
    render(){
        return(
            <CollectionContainer>
                <CollectionUserDiv>
                <Avatar src="https://www.pinclipart.com/picdir/middle/413-4130758_first-sample-avatar-image-silhouette-clipart.png" alt="user picture" style={{position:"relative",height: '170px', width: '170px',marginLeft:'-300px' }} />
                <label style={{left: "-280px", position:"absolute",float: "left",margin:"10px", fontFamily: "inherit",fontSize:"20px"}}>Jane Doe</label>
                </CollectionUserDiv>

                <CollectionListDiv>
                    <StyledCollumContainer>
                    <CardColumns style={{
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

            </CollectionContainer>
        );
    }
}

export default Collection;