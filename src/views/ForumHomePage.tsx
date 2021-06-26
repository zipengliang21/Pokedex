import styled from "styled-components";
import React from "react";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ForumHeader from "../components/Forum/ForumHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import Fade from "react-reveal/Fade";
import Pokemon from "../components/DetailedView/Pokemon";

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
    .small{
      display: none;
    }
    .title{
      width: 418px;
    }
  }
  @media(max-width: 576px){
    width: 100%;
    .title{
      margin: 0 auto;
    }
  }
`;

const ForumContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    min-width: 100%;
    margin: 0 auto;
`;

const ForumTh = styled.th`
    border-style: solid;
    border-color: brown;
    justify-content: space-between;
    background: linear-gradient(lightblue, white);
`;

const ForumTr = styled.tr`
    border-style: solid;
    border-color: brown;
    justify-content: space-between;
    background: white;
`;
const ForumA = styled.a`
    background: #f5f5dc;
    display: block;
    font-size: 18px;
`;
const ForumTdName = styled.td`
    background: #f5f5dc;
    text-align: center;
    vertical-align: baseline;
`;

const Pagination = styled.div`
    margin-top: 30px;
    color: mediumpurple;
`;


function ForumHomePage(props: any) {
   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             <ForumContentWrapper>
                <table className="title">
                   <ForumTr>
                      <ForumTh className="title">Title</ForumTh>
                      <ForumTh className="small">Description</ForumTh>
                      <ForumTh className="small">Author</ForumTh>
                      <ForumTh className="small">Date</ForumTh>
                   </ForumTr>
                   {props.postList.map((post: any, index: any) => {
                      return (
                          <ForumTr>
                             <ForumTdName>
                                <NavLink to={`/post/${index + 1}`}>
                                   <ForumA className="title">
                                      {post.title}
                                   </ForumA>
                                </NavLink>

                             </ForumTdName>
                             <ForumTdName className="small">{post.description}</ForumTdName>
                             <ForumTdName className="small">{post.userName}</ForumTdName>
                             <ForumTdName className="small">Date</ForumTdName>
                          </ForumTr>
                      );
                   })}
                </table>

             </ForumContentWrapper>
             <Pagination>
                1 2 3 4 ... 9 10
             </Pagination>
          </ForumWrapper>;
       </Background>
   );


}

export default ForumHomePage;