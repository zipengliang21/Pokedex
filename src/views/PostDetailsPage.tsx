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
  min-height: 500px;
  margin: 0 auto;

  @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 230px;
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
    const {getCommentForPost} = useCommentList();
    // const [filteredComment, setfilteredComment] = useState<Comment[]>([]);
    // const [commentLi, setcommentLi] = useState<Comment[]>([]);
    const [filteredComment, setfilteredComment] = useState<Comment[]>([]);
    //     useState([{
    //     userId: "",
    //     userName: "",
    //     postID: "",
    //     commentID: "",
    //     content: ""
    // }]);
    // useEffect(() => {
    //     const commentList = getCommentList();
    //     setcommentLi(commentList);
    // }, []);
    const init = async () => {
        const data = await getCommentForPost(props.postID);
        setfilteredComment(data)
    }
    useEffect(() => {
       init();
    }, []);
   // console.log("After useEffect Filtered Comments "+filteredComment[0]+typeof filteredComment + props.postID);

   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumViewWrapper>
                <PostDetails rootPost ={props.rootPost}/>
                 {filteredComment.map((comment:any, index: any) => {
                     return (
                         <PostComment comment = {comment} id = {index} />
                     )})}

                <PostNewComment add = {props.addComment}
                                // filteredComment ={filteredComment}
                                postID = {props.postID}/>
             </ForumViewWrapper>
          </ForumWrapper>
       </Background>
   );


}

export default PostDetailsPage;