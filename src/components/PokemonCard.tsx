import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';
  import styled from "styled-components";


interface CardProps{
    picName: string;
    picSource: string;
    description: string;
}

const StyledCardImg = styled.img`
    width: 280px;
    height: 280px;
`;

const StyledLink = styled.a`
    font-size: 40px;
    font-weight:600;
    color: black;
`;

class PokemonCard extends React.Component<CardProps>{
    constructor(props:CardProps){
        super(props);
    }

    checkProps = (props: CardProps)=>{
        if(props.picName!==""&&props.picSource!==""&&props.description!==""){
            return true;
        }
        return false;
    }

    render(){
        if(this.checkProps(this.props)){
            return(
            <Card style={
                {
                breakInside:"avoid",
                marginBottom:"20px",
                position: "relative",
                wordWrap: "break-word",
                flexDirection: "column",
                backgroundColor: "#fff",
                backgroundClip: "border-box",
                flexWrap: "wrap",
            }
            }>
            <StyledCardImg src={this.props.picSource} alt={this.props.picName}></StyledCardImg>
            <CardBody style={{
                flex: "1 1 auto",
                minHeight: "1px",
                padding: "1.25rem",
            }}>
                <StyledLink href="/#/pokemon/001">{this.props.picName}</StyledLink>
            </CardBody>
            </Card>
            )
        }
        alert("wrong field value in creating a card")
    }

}

export default PokemonCard;
