import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from "styled-components";


const OverviewContainer = styled.div`
  position: absolute;
  float: left;
  top: 25px;
  width: 1236px;
  height: 100vh;
  margin-left:300px;
`;

const TitleDiv = styled.div`
    display:inline-block;
`;
const Title = styled.h2`
    display:block;
    text-transform: uppercase;
    width: auto;
    margin-top: 30px;
    fontFamily: inherit;
    color: black;
`;

const ValueDiv = styled.div`
    display:inline-block;
    width:auto;
    margin-left:2%;
`;

const Value = styled.p`
    display:block;
    width:auto;
    margin-top: 30px;
    fontFamily: inherit;
    color: black;
`;

const CollectionPreviewContainer = styled.div`

`;

class Overview extends React.Component{
    render(){
        return(
            <OverviewContainer >
            <Avatar src="https://www.pinclipart.com/picdir/middle/413-4130758_first-sample-avatar-image-silhouette-clipart.png" alt="user picture" style={{position:"relative",height: '170px', width: '170px' }} />
            <TitleDiv>
                <Title>User Name:</Title>
                <Title>User Desciption:</Title>
            </TitleDiv>
            <ValueDiv>
                <Value>TEST TEST1</Value>
                <Value>TEST TEST2</Value>
            </ValueDiv>
            <CollectionPreviewContainer>
            Sample card goes here:
            </CollectionPreviewContainer>
            </OverviewContainer >
        );
        
    }
}

export default Overview;