import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ForumHeader from "../components/Forum/ForumHeader";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import PostDetails from "components/PostDetail/PostDetails";
import PostComment from "components/PostDetail/PostComment";
import PostNewComment from "components/PostDetail/PostNewComment";
import {useCommentList} from "../hooks/useCommentList";
import {usePostList} from "../hooks/usePostList";

const Wrapper = styled.div`
  width: 850px;
  background: inherit;
  margin: 0 auto;
  @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const ForumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  margin: 0 auto;
  background: inherit;
  text-align: center;
  @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const ForumViewWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  margin: 0 auto;
  align-items: center;
  @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 90%;
  }
`;

function PostDetailsPage(props: any) {
   const {filteredComment, setFilteredComment, getCommentForPost} = useCommentList();
   const {getPost} = usePostList();
   const [post, setPost] = useState({postID: "", _id:""});


   const init = async () => {
      const pickPost = await getPost(props._id);
      setPost(pickPost);
      await getCommentForPost(pickPost._id);

   };

   useEffect(() => {
      init();
   });
   return (
       <Wrapper>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumViewWrapper>
                <PostDetails rootPost={post}
                             deletePost = {props.deletePost}
                             currentUser={props.currentUser}
                />
                {filteredComment.map((comment: any, index: number) => {
                   return (
                       <PostComment comment={comment} id={index} currentUser={props.currentUser}/>
                   );
                })}
                {props.currentUser && <PostNewComment add={props.addComment}
                                           _id={props._id}
                                           postID={post._id}
                                           filteredComment={filteredComment}
                                           setFilteredComment={setFilteredComment}
                                           currentUser={props.currentUser}
                                           />}
             </ForumViewWrapper>
          </ForumWrapper>
       </Wrapper>
   );
}

export default PostDetailsPage;