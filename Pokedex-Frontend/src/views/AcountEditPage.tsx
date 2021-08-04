import React,{useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EditForm from "../components/DetailedView/EditForm";
import Axios from 'axios';

const Background = styled.div`
   width: 850px;
   margin: 0 auto;
   background: inherit;
     @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
   display: flex;
   width: 850px;
   margin: 100px auto 0 auto;
   margin-top:0;
   min-height: 500px;
   text-align: center;
   background: inherit;
   align-items: center;
   justify-content: center;
   @media(max-width: 875px){
     width: 418px;
     flex-direction: column;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const Banner = styled.header`
   max-width:850px;
   margin: 0 auto;
   background: inherit;
   text-align: center;
   -webkit-filter: none;
   z-index: 1;
   display:flex;
   flex-direction:column;
   .welcomeMsg{
       min-height: 80px;
       font-size: 28px;
       font-weight: 600;
       color: #04266D;
       background: #616161;
       padding-top: 15px;
}
  @media(max-width: 875px){
    width: 418px;
    flex-direction: column;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const CurrInfoWrapper = styled.div`
justify-content: center;
align-items: center;
text-align:center;
`;

const AvatarWrapperT = styled.div`
text-align:center;
justify-content: center;
align-items: center;
`;

const AvatarWrapperB = styled.div`
margin: 0 auto;
flex-direction:column;
text-align:center;
justify-content: center;
`;

const ModalContent = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 50%;
pointer-events: auto;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0,0,0,.2);
border-radius: .3rem;
outline: 0;
margin:20px auto;
margin-top:20vh;
button.close{
  border:0;
  background-color:#fff;
  font-size:20px;
  cursor:pointer;
}
button.save-btn{
  padding:5px;
  text-align:center;
  width:106px;
  height:34px;
  font:inherit;
  background-color:#3F51B5;
  color:white;
  border-radius:5px;
  border:0;
  cursor:pointer;
}
button.close-bottom{
  padding:5px;
  text-align:center;
  margin-right:2vw;
  width:106px;
  height:34px;
  font:inherit;
  background-color: #6c757d;
  color:white;
  border-radius:5px;
  border:0;
  cursor:pointer;
}
`;


function AccountEditPage(props: any) {
    const [popup, setPopup] = useState(false);
    const [avatar,setAvatar] = useState('');
    const [avatarGet,setAvatarGet] = useState('');

    const getProfile = async (_id: string) => {
        const response = await Axios.get(`/api/profile/${_id}`);
        return response.data.profile[0];
    }

    useEffect( () => {
        async function initialSet() {
            if (props.currentUser !== undefined && props.currentUser !== null){
                setAvatarGet(props.currentUser.avatar);
            }
        }
        initialSet();
    }, [props.currentUser]);

    const handleClose = () =>{
        setPopup(!popup);
        setAvatar("");
    }
    const handleChangeAvatar = async() =>{
        const reqBody = {avatar:avatar,userId:props.currentUser._id};
        const res = await Axios.post(`/api/profile/avatar`,reqBody);
        console.log(res);
        const profile = await getProfile(props.currentUser._id);
        setAvatarGet(profile.avatar);
        props.currentUser.avatar = profile.avatar;
    }

    return (
        <Background>
            <Banner role="banner">
                <a className="welcomeMsg" target="_blank" rel="noreferrer">Profile</a>
            </Banner>
            {props.currentUser &&
            <ContentWrapper>
                <CurrInfoWrapper>
                    <AvatarWrapperT className="avatar">
                        <button className="changeAvatar" style={{
                            background: "transparent",
                            border: 0,
                            cursor: "pointer",
                            height: "80%",
                            padding: 0,
                            width: "80%"
                        }}
                                onClick={() => handleClose()}>
                            <img
                                src={avatarGet}
                                alt="user picture"
                                style={{borderRadius: "50%", marginTop: "1rem", height: "100px", width: "100px"}}>
                            </img>
                        </button>
                    </AvatarWrapperT>
                    <AvatarWrapperB>
                        <h1>{props.currentUser.userName}</h1>
                        <button className="changeAvatar" style={{
                            width: "160px",
                            height: "34px",
                            borderColor: "#D9D9D9",
                            font: "inherit",
                            background: "white",
                            borderRadius: "5px"
                        }}
                                onClick={() => handleClose()}>
                            <FontAwesomeIcon icon={faEdit} className="edit"/> Change Avatar
                        </button>
                    </AvatarWrapperB>
                    {popup &&
                    <Modal backdrop="static" show={popup} onHide={() => handleClose()}
                           style={{
                               position: "fixed",
                               top: 0,
                               left: 0,
                               zIndex: 1060,
                               backgroundColor: "rgba(0,0,0,0.5)",
                               display: "none",
                               width: "100%",
                               height: "100%",
                               overflowX: "hidden",
                               overflowY: "auto",
                               outline: 0
                           }}>
                        <ModalContent>
                            <Modal.Header closeButton style={{
                                display: "flex",
                                flexShrink: 0,
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "1rem",
                                borderBottom: "1px solid #dee2e6",
                                borderTopLeftRadius: "calc(.3rem - 1px)",
                                borderTopRightRadius: "calc(.3rem - 1px)",
                            }}>
                                <Modal.Title>Insert image url</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{
                                position: "relative",
                                flex: "1 1 auto",
                                padding: "1rem"
                            }}>
                                <input type="text" placeholder="http://example.com"
                                       style={{width: "45vw", maxWidth: "400px", minHeight: "30px", margin: "10px 0"}}
                                       onChange={(event => {
                                           setAvatar(event.target.value)
                                       })} value={avatar}/>
                            </Modal.Body>
                            <Modal.Footer style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexShrink: 0,
                                alignItems: "center",
                                justifyContent: "flex-end",
                                padding: ".75rem",
                                borderTop: "1px solid #dee2e6",
                                borderBottomRightRadius: "calc(.3rem - 1px)",
                                borderBottomLeftRadius: "calc(.3rem - 1px)"
                            }}>
                                <button className="close-bottom" onClick={() => handleClose()}>Close</button>
                                <button className="save-btn" onClick={() => handleChangeAvatar()}>
                                    Save Changes
                                </button>
                            </Modal.Footer>
                        </ModalContent>
                    </Modal>
                    }
                    <EditForm currentUser={props.currentUser}
                              _id={props.currentUser._id}/>
                </CurrInfoWrapper>
            </ContentWrapper>
            }
        </Background>
    );
}

export default AccountEditPage;