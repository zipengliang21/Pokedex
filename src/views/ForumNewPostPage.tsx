import styled from "styled-components";
import React, {useEffect, useState} from "react";
import ForumHeader from "../components/Forum/ForumHeader";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import InputForm from "../components/Forum/InputForm";

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
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
      if (props.currentUser !== undefined && props.currentUser !== null) {
         setIsAuth(true);
      }
       console.log("New Post auth in use eff:  "+isAuth);
       console.log("New Post User in use eff:  "+ props.currentUser);
   }, [props.currentUser]);

    console.log("New Post auth:  "+ isAuth);
   return (
       <Wrapper>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             {isAuth &&
             <ForumNewPostWrapper>
                <InputForm add={props.addPost} currentUser={props.currentUser}/>
             </ForumNewPostWrapper>
             }
          </ForumWrapper>
       </Wrapper>
   );
}

export default ForumNewPostPage;