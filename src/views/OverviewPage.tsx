import React, { useState, useEffect,useRef, useCallback } from 'react';
import { Avatar, Input, TextField } from '@material-ui/core';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";
import { faEdit,faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

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
width: 100%;
min-height: 100%;
justify-content: center;
`;

const OverviewContainer = styled.div`
min-height: 100%;
max-width:100%;
min-width:100%;
background-size: cover;
display:flex;
justify-content: center;
`;

const ContentWrapper = styled.div`
display: flex;
width: 850px;
margin: 0 auto;
min-height: 100vh;
text-align: center;
`;

const CollectionListDiv = styled.div`
position: relative;
margin-bottom: 3rem;
background-color: #fff;
flex: 1;
text-align: center;
max-width: 100%;
min-height: 100%;
background: linear-gradient(63.06deg, #AC85DE 0%, rgba(127, 176, 213, 0.8) 78.62%);
display: flex;
flex-direction: row;
`;

const LeftWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left: 2vw;
margin-top: 4vh;
`;

const AvatarWrapper = styled.div`
display:flex;
margin: 0 auto;
`;

const LinkWrapper = styled.div`
postion:relative;
display:flex;
justify-content: space-between;
text-align:center;
font:inherit;
font-size:0.9rem;
margin-top:3.2vh;
color: rgba(71,32,121,0.9);
li{
    display: inline-block;
    horizontal-align: middle;}
`;

const DividerWrapper = styled.div`
width:70%;
margin:0px auto;
position:abosolute;
display:flex;
flex-direction:column;
`;

const StyledDivider = styled.div`
display:flex;
margin-top:20px;
border-left:2px solid;
`;

const InfoColumn = styled.div`
display: flex;
-ms-flex-pack: justify;
flex-direction:row;
justify-content: space-between;
ul{
    flex-grow: 1;
    flex-basis: 1px;
}
.edit-form{
    flex-grow: 1;
    flex-basis: 1px;
}
.present-form{
    flex-grow: 1;
    margin-left:3vw;
    flex-basis: 1px;
}
button{
    margin-right:2vw;
    background-color: rgba(71,32,121,0.9);
    background-repeat:no-repeat;
    border-style: dotted;
    border-radius: 10px;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    text-align:center;
    text-decoration:underline;
    display:inline-block;
    color:#E6E6D8;
    font-size:1.2rem;
    width:5.5rem;
}
.edit-control-wrapper{
    margin-top:5vh;
    white-space: nowrap;
   text-align: center;
}
`;

const FormEditButton = styled.div`
display:flex;
margin-top: 5vh;
margin-left: 7vw;
font:inherit;
`;

const Title = styled.h2`
display: inline-block;
    text-transform: uppercase;
    width: auto;
    margin-left:2vw;
    margin-top: 5vh;
    fontFamily: inherit;
    color: black;
`;

const Value = styled.p`
display:block;
width:auto;
margin-top: 5vh;
margin-left:-3vh;
fontFamily: inherit;
color: black;
text-align: center;
`;

const StyledInput = styled.input`
display:block;
width:auto;
margin-top: 5vh;
margin-left:8vw;
fontFamily: inherit;
color: black;
background-color: Transparent;
background-repeat:no-repeat;
cursor:pointer;
overflow: hidden;
`;

interface StateInterface {
name: string;
description: string;
}
  
const ProfileEdit: React.FC = () => {
    const [editing, setEditing] = useState(false);
    let name = useRef<HTMLInputElement>(null);
    let description = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<StateInterface>({
      name: 'Jane Doe' || '',
      description: 'I am a pokemon master' || '',
    });

    const handleEdit = () =>{
        setEditing(!editing);
        console.log(editing);
    }

    const saveEmail = () => {
      localStorage.setItem('name', state.name)
      console.log(state);
    }
  
    const update = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === 'name') {
        setState({ ...state, name: event.target.value });
      } else if (event.target.name === 'description') {
        setState({ ...state, description: event.target.value });
      }
    };
  
    if(editing){
        return (
            <ul className = "edit-form">
                <li>
                    <StyledInput name='name' ref={name} onChange={update} value={state.name} />
                </li>
                <li>
                    <StyledInput name='description' ref={description} onChange={update} value={state.description} /> 
                </li>
                <FormEditButton>
                <button className="save" onClick={saveEmail}>Save</button>
                <button className="done" onClick={handleEdit}>Done</button></FormEditButton>
            </ul>
        )
    }
    return(
    <ul className="present-form">
        <li>
        <Value>{state.name} </Value>
        </li>
        <li>
        <Value>{state.description} </Value>
        </li>
        <div className="edit-control-wrapper">
            <FontAwesomeIcon icon = {faEdit} color="rgba(71,32,121,0.9)"></FontAwesomeIcon>
            <button onClick={handleEdit} >Edit</button>
        </div>
    </ul>
    )
  
  }

class OverviewPage extends React.Component{
    render(){
        return(
            <Background>
                <LogoutHeader /> 
                <NavBar/>
            <Wrapper>
            <OverviewContainer >
            <ContentWrapper>
                <CollectionListDiv>
                <LeftWrapper>
                    <AvatarWrapper className="avatar">
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJReCDApHNGOvzHLZ-cYE5lLXy7B5pVnaVVsN4GIUaM8uWLSbHV_lnaYLjMhDwWllaU4&usqp=CAU" alt="user picture" style={{position:"relative",height: '170px', width: '170px' }} />
                    </AvatarWrapper>
                    <LinkWrapper className="links">
                        <ul>
                        <li>
                        <NavLink exact activeClassName="selected" to="/collections" className="collection">
                            <div>
                            <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
                            <div className="span">Checkout Your Collection</div>
                            </div>
                        </NavLink>
                        </li>
                        </ul>
                    </LinkWrapper>
                </LeftWrapper>
                <DividerWrapper>
                    <StyledDivider>
                        <InfoColumn>
                        <ul>
                            <li>
                            <Title>User Name:</Title>
                            </li>
                            <li>
                            <Title>User Desciption:</Title>
                            </li>
                        </ul>
                        <ProfileEdit />   
                        </InfoColumn>
                    </StyledDivider>
                </DividerWrapper>
                </CollectionListDiv>
            </ContentWrapper>
            </OverviewContainer >
            </Wrapper>
            </Background>
        );
        
    }
}

export default OverviewPage;