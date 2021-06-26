import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SimpleMDE from "react-simplemde-editor";

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
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
    width: 30%;
    @media(max-width: 875px){
      width: 100%;
    }
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
     @media(max-width: 875px){
        width: 100%;
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

const PostNewComment = (props:any) => {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   const[commentContent, setCommentContent] = useState('');
   // const[commentID, setcommentID] = useState('');
   // const[postID, setPostId] = useState('');
    const handleContentChange = (value: string) => {
        setCommentContent(value);
        // setcommentID(props.commentID);
        // setPostId(props.postID);
    };
   return (
       <InfoWrapper>
          <ContentWrapper>
             <UserWrapper>
                <img src={`${logo}`} alt="logo" className="logo" width={100}/>
                <div className="userName">Mock user passed from other user aspect</div>
             </UserWrapper>
             <CommentWrapper>
                 <SimpleMDE value={commentContent} onChange={handleContentChange}/>
                 <a href="http://localhost:3000/Pokemon#/forum">
                     <button id="submitButton" onClick={() => props.add(commentContent,props.postID)}>Submit</button>
                 </a>
             </CommentWrapper>
          </ContentWrapper>
       </InfoWrapper>
   );
};

export default PostNewComment;

