import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SimpleMDE from "react-simplemde-editor";

const InfoWrapper = styled.div`
  width: 750px;
  margin: 10px auto 50px auto;
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
    flex-direction: column;
    justify-items: center;
    @media(max-width: 875px){
          flex-direction: column;
     width: 418px;
    }
    @media(max-width: 576px){
      flex-direction: column;
      width: 100%;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    text-align: left;
    padding-left: 40px;
    margin-top: 10px;
    align-items: center;
    .userName{
      max-width: 150px;
    }
    @media(max-width: 875px){
      width: 100%;
      padding-left: 0;
    }
`;

const CommentWrapper = styled.div`
    width: 700px;
    margin: 0 40px;
    padding: 2px 5px;
    text-align: left;
    #submitButton{
       background-color: #3F51B5;
       border-color: #3F51B5;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
       margin-top: 10px;
    }
    @media(max-width: 875px){
        width: 100%;
        margin: 0;
    }
`;

const PostNewComment = (props: any) => {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   const [commentContent, setCommentContent] = useState("");
   const handleContentChange = (value: string) => {
      setCommentContent(value);
   };
   return (
       <InfoWrapper>
          <ContentWrapper>
             <UserWrapper>
                <img src={`${logo}`} alt="logo" className="logo" width={100}/>
                <div className="userName">Mock user</div>
             </UserWrapper>
             <CommentWrapper>
                <SimpleMDE value={commentContent} onChange={handleContentChange}/>
                <button id="submitButton" onClick={() => props.add(commentContent, props.postID)}>Submit</button>
             </CommentWrapper>
          </ContentWrapper>
       </InfoWrapper>
   );
};

export default PostNewComment;

