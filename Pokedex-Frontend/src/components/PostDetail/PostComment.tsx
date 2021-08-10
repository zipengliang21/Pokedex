import React from "react";
import styled from "styled-components";
import moment from "moment";

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
    max-width: 500px;
    margin: 0 auto;
`;

const PostComment = (props: any) => {

    return (
        <InfoWrapper>
            <DateWrapper>
                <span>{moment(props.comment.date).format("YYYY-MM-DD HH:mm:ss")}</span>
                <span>#{props.id + 2}</span>
            </DateWrapper>
            <ContentWrapper>
                <UserWrapper>
                    <img src={props.comment.avatar} alt="logo" className="logo" width={100} height={100}/>
                    <div className="userName">{props.comment.userName}</div>
                </UserWrapper>
                <Content>{props.comment.content}</Content>
            </ContentWrapper>
        </InfoWrapper>
    );
};

export default PostComment;

