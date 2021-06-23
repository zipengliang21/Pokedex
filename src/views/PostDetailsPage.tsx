import React from "react";
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
    width: 230px;
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

function PostDetailsPage() {
   // const index = pokemon.id;
   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumViewWrapper>
                <PostDetails/>
                <PostComment/>
                <PostNewComment/>
             </ForumViewWrapper>
          </ForumWrapper>;
       </Background>
   );
}

export default PostDetailsPage;