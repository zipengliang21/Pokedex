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
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const StyledLink = styled.a`
    font-size: 17px;
    color: #80B2EC;
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
                border: "1px solid rgba(0,0,0,.125)",
                borderRadius: ".25rem",}
            }>
            <StyledCardImg src={this.props.picSource} alt={this.props.picName}></StyledCardImg>
            <CardBody style={{
                flex: "1 1 auto",
                minHeight: "1px",
                padding: "1.25rem",
            }}>
            <CardTitle tag="h2">{this.props.picName}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.description}</CardSubtitle>
            </CardBody>
            <CardFooter style={{
                padding: ".75rem 1.25rem",
                backgroundColor: "rgba(0,0,0,.03)",
                borderTop: "1px solid rgba(0,0,0,.125)",
            }
            }>
                <StyledLink href="#">Link to view Pokemon detail</StyledLink>
            </CardFooter>
            </Card>
            )
        }
        alert("wrong field value in creating a card")
    }

}

export default PokemonCard;
