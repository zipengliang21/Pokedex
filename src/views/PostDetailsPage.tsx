import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import SearchBar from "../components/Common/SearchBar";
import ForumHeader from "../components/Forum/ForumHeader";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import InputForm from "../components/Forum/InputForm";
import PostDetails from "components/PostDetail/PostDetails";
import PostComment from "components/PostDetail/PostComment";
import PostNewComment from "components/PostDetail/PostNewComment";
import {useCommentList} from "../hooks/useCommentList";
import {NavLink} from "react-router-dom";
import ForumData from "../ForumData.json";
import Heart from "../components/Icon/ForumIcon/Heart";


const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
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

const LikeButton = styled.div`
    background-color: #DC004E;
    border-color: #DC004E;
    cursor: pointer;
    padding: 5px 18px;
    font-size: 14px;
    border-radius: 4px;
    color: #FFFFFF;
    svg{
      margin-right: 5px;
    }
`;


interface Comment {
    userId: string;
    userName: string;
    postID: string;
    commentID: number;
    content: string;
}

function PostDetailsPage(props:any) {
    const {filteredComment,setfilteredComment,getCommentForPost} = useCommentList();

    const init = async () => {
        const data = await getCommentForPost(props.postID);
        setfilteredComment(data)
    }
    useEffect(() => {
       init();
    }, [filteredComment]);

   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumViewWrapper>
                <PostDetails rootPost ={props.rootPost}/>
                 {filteredComment.map((comment:any, index: number) => {
                     return (
                         <PostComment comment = {comment} id = {index} />
                     )})}
                <LikeButton><Heart color="#FFFFFF"/>Liked</LikeButton>
                <PostNewComment add = {props.addComment}
                                // filteredComment ={filteredComment}
                                postID = {props.postID}/>
             </ForumViewWrapper>
          </ForumWrapper>
       </Background>
   );


}

export default PostDetailsPage;