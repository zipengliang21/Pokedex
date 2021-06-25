import React from "react";
import styled from "styled-components";

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

const ContentWrapper = styled.div`
    width: 750px;
    display: flex;
    justify-items: center;
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
`;

const CommentWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    //border: 2px solid gray;
    padding: 2px 5px;
    text-align: left;
    #submitButton{
       background-color: #1890FF;
       border-color: #1890ff;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
       margin-top: 10px;
    }
`;

const Comment = styled.div`
    width: 500px;
    height: 100%;
    margin: 0 auto;
    border: 2px solid gray;
    padding: 2px 5px;
    text-align: left;
`;

const PostNewComment = ({post}: any) => {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   return (
       <InfoWrapper>
          <ContentWrapper>
             <UserWrapper>
                <img src={`${logo}`} alt="logo" className="logo" width={100}/>
                <div className="userName">Mock User 2</div>
             </UserWrapper>
             <CommentWrapper>
                <Comment>Please be considerate and polite in your comment.</Comment>
                <button id="submitButton">Submit</button>
             </CommentWrapper>
          </ContentWrapper>
       </InfoWrapper>
   );
};

export default PostNewComment;

