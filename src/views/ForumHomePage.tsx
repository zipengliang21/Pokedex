import styled from "styled-components";
import React from "react";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ForumHeader from "../components/Forum/ForumHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import ForumSubHeader from "../components/Forum/ForumSubHeader";

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

const ForumContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
`;
const ForumSubHeaderWrapper = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    background: linear-gradient(180deg, #80B2ED -3.56%, #B6CDE9 104.67%);
    justify-content: space-between;
    align-items: center;
    span{
      font-size: 18px;
    }
    .headerLeft{
      margin-left: 40px;
    }
    .headerRight{
      margin-right: 40px;
    }
    .plus{
      margin-right: 5px;
      color: green;
    }    
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
                <table>
                   <ForumTr>
                      <ForumTh>Title</ForumTh>
                      <ForumTh>Description</ForumTh>
                      <ForumTh>Author</ForumTh>
                      <ForumTh>Date</ForumTh>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName>
                         <ForumA href="https://veekun.com/forums/1/threads/102">
                            Considering a split
                         </ForumA>
                      </ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>

                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>

                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>

                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
                   <ForumTr>
                      <ForumTdName><ForumA href="https://veekun.com/forums/1/threads/102">Considering a
                         split</ForumA></ForumTdName>
                      <ForumTdName>Description</ForumTdName>
                      <ForumTdName>Author</ForumTdName>
                      <ForumTdName>Date</ForumTdName>
                   </ForumTr>
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