import styled from "styled-components";
import React, {useState} from "react";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ForumHeader from "../components/Forum/ForumHeader";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import InputForm from "../components/Forum/InputForm";
// import ForumData from "../ForumData.json"

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
    width: 100%
  }
`;

const ForumNewPostWrapper = styled.div`
  width: 800px;
  min-height: 500px;
  margin: 0 auto;

  @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

function ForumNewPostPage(props: any) {
    // const[postList, setPostList] = useState(ForumData);

   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumNewPostWrapper>
               <InputForm add={props.add} />
             </ForumNewPostWrapper>
          </ForumWrapper>
       </Background>
   );


}

export default ForumNewPostPage;