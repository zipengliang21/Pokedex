import React, {useState, useRef} from "react";
import {Avatar,} from "@material-ui/core";
import styled from "styled-components";
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";
import {faEdit, faBookmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const ContentWrapper = styled.div`
display: flex;
width: 850px;
margin: 100px auto 0 auto;
min-height: 500px;
text-align: center;
background: #F0F2F5;
   @media(max-width: 875px){
     width: 418px;
     flex-direction: column;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const LeftWrapper = styled.div`
display:flex;
flex-direction:column;
margin: 40px 0 0 70px;
text-align: center;
padding: 10px;
@media(max-width: 875px){
  margin: 0;
}
`;

const AvatarWrapper = styled.div`
display:flex;
margin: 0 auto;
`;

const LinkWrapper = styled.div`
display:flex;
text-align:center;
margin-top: 20px;
color: rgba(71,32,121,0.9);
@media(max-width: 875px){
  margin: 20px auto 0 auto;
}
`;

const DividerWrapper = styled.div`
margin:0 auto;
display:flex;
flex-direction:column;
`;

const InfoColumn = styled.div`
margin-top:20px;
display: flex;
flex-direction:row;
//width: 500px;
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
    margin-bottom: 20px;
    background-color: rgba(71,32,121,0.9);
    background-repeat:no-repeat;
    border-style: dotted;
    border-radius: 10px;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    text-align:center;
    color:#E6E6D8;
    font-size:20px;
    width:5.5rem;
}
.edit-control-wrapper{
    margin-top:50px;
    white-space: nowrap;
   text-align: center;
}
`;

const FormEditButton = styled.div`
display:flex;
margin-top: 50px;
`;

const Title = styled.h2`
    display: inline-block;
    text-transform: uppercase;
    margin-top: 50px;
`;

const Value = styled.p`
  margin-top: 50px;
`;

const StyledInput = styled.input`
margin-top: 50px;
text-align: center;
cursor:pointer;
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
      name: "Jane Doe" || "",
      description: "I am a pokemon master" || "",
   });

   const handleEdit = () => {
      setEditing(!editing);
      console.log(editing);
   };

   const saveEmail = () => {
      localStorage.setItem("name", state.name);
      console.log(state);
   };

   const update = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === "name") {
         setState({...state, name: event.target.value});
      } else if (event.target.name === "description") {
         setState({...state, description: event.target.value});
      }
   };

   if (editing) {
      return (
          <ul className="edit-form">
             <li>
                <StyledInput name='name' ref={name} onChange={update} value={state.name}/>
             </li>
             <li>
                <StyledInput name='description' ref={description} onChange={update} value={state.description}/>
             </li>
             <FormEditButton>
                <button className="save" onClick={saveEmail}>Save</button>
                <button className="done" onClick={handleEdit}>Done</button>
             </FormEditButton>
          </ul>
      );
   }
   return (
       <ul className="present-form">
          <li>
             <Value>{state.name} </Value>
          </li>
          <li>
             <Value>{state.description} </Value>
          </li>
          <div className="edit-control-wrapper">
             <FontAwesomeIcon icon={faEdit} color="rgba(71,32,121,0.9)"/>
             <button onClick={handleEdit}>Edit</button>
          </div>
       </ul>
   );
};

class OverviewPage extends React.Component {
   render() {
      return (
          <Background>
             <LogoutHeader/>
             <NavBar/>
                <ContentWrapper>
                   <LeftWrapper>
                      <AvatarWrapper className="avatar">
                         <Avatar
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJReCDApHNGOvzHLZ-cYE5lLXy7B5pVnaVVsN4GIUaM8uWLSbHV_lnaYLjMhDwWllaU4&usqp=CAU"
                             alt="user picture" style={{position: "relative", height: "170px", width: "170px"}}/>
                      </AvatarWrapper>
                      <LinkWrapper className="links">
                         <ul>
                            <li>
                               <NavLink exact activeClassName="selected" to="/collections" className="collection">
                                  <div>
                                     <FontAwesomeIcon icon={faBookmark}/>
                                     <div className="span">Checkout Your Collection</div>
                                  </div>
                               </NavLink>
                            </li>
                         </ul>
                      </LinkWrapper>
                   </LeftWrapper>
                   <DividerWrapper>
                         <InfoColumn>
                            <ul>
                               <li>
                                  <Title>User Name:</Title>
                               </li>
                               <li>
                                  <Title>User Desciption:</Title>
                               </li>
                            </ul>
                            <ProfileEdit/>
                         </InfoColumn>
                   </DividerWrapper>
                </ContentWrapper>
          </Background>
      );

   }
}

export default OverviewPage;