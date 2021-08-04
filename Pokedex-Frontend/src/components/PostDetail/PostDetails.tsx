import React, {useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";
import {useHistory} from "react-router";
import {FormattedMessage} from "react-intl";

const InfoWrapper = styled.div`
  width: 750px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: inherit;
  header{
    font-weight: 600;
    font-size: 28px;
    color: #04266D;
  }

   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const DateWrapper = styled.div`
    width: 750px;
    background: #DAE4F4;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
   @media(max-width: 875px){
     width: 418px;
   }
   @media(max-width: 576px){
      width: 100%;
      padding: 0 20px;
    }
`;

const ContentWrapper = styled.div`
    width: 750px;
    display: flex;
    justify-items: center;
    #deleteButton{
       background-color: #3F51B5;
       border-color: #3F51B5;
       cursor: pointer;
       height: 32px;
       width: 100px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
       margin-top: 10px;
    }
    @media(max-width: 875px){
     width: 418px;
    }
    @media(max-width: 576px){
      width: 100%;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
    @media(max-width: 875px){
      padding-left: 20px;
    }
    @media(max-width: 576px){
      padding-left: 0;
    }
`;

const Content = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const PostDetails = (props: any) => {

    const history = useHistory();

    const [currentUserId,setCurrentUserId] = useState("");
    const [currentUserIsAdmin, setCurrentUserIsAdmin] = useState(false);

    useEffect(() => {
        if (props.currentUser !== undefined && props.currentUser !== null){
            setCurrentUserId(props.currentUser._id);
            setCurrentUserIsAdmin(props.currentUser.isAdmin);
        }
    }, [props.currentUser]);


    const deleteThisPost = async () => {
        await props.deletePost(props.rootPost._id);
        history.push("/forum");
    }

   return (
       <InfoWrapper>
          <header>{props.rootPost.title}</header>
          <DateWrapper>
             <span>{moment(props.rootPost.date).format('YYYY-MM-DD HH:mm:ss')}</span>
             <span>#1</span>
          </DateWrapper>
          <ContentWrapper>
             <UserWrapper>
                <img src={props.rootPost.avatar} alt="logo" className="logo" width={100} height = {100}/>
                <div className="userName">{props.rootPost.userName}</div>
             </UserWrapper>
             <Content>{props.rootPost.content}</Content>
              {(currentUserId === props.rootPost.userId || currentUserIsAdmin)&&
              <button id="deleteButton"
                      onClick={() => deleteThisPost()}><FormattedMessage id='DeletePost'/>
              </button>
              }
          </ContentWrapper>

       </InfoWrapper>
   );
};

export default PostDetails;

