import styled from "styled-components";
import React from "react";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ForumHeader from "../components/Forum/ForumHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Comment from "../components/Icon/ForumIcon/Comment"
import {NavLink} from "react-router-dom";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import Fade from "react-reveal/Fade";
import Pokemon from "../components/DetailedView/Pokemon";
import Heart from "components/Icon/ForumIcon/Heart";

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
  .title{
    font-weight: 600;
  }
  @media(max-width: 875px){
    width: 418px;
    .small{
      display: none;
    }
    .title{
      width: 418px;
       @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 230px;
      }
    }
  }
  @media(max-width: 576px){
    width: 100%;
    .title{
      margin: 0 auto;
       @media(max-width: 875px){
        width: 418px;
      }
      @media(max-width: 576px){
        width: 230px;
      }
    }
  }
`;

const ForumContentWrapper = styled.section`
    display: flex;
    max-width: 800px;
    min-width: 100%;
    height: 125px;
    background: ${props => props.theme === "half" ? "rgba(186, 235, 186, 0.7)" : "#BAEBBA"};
    border-bottom: 1px solid #472079;
    justify-content: space-between;
    text-align: left;
}
`;

const ContentWrapper = styled.div`
    margin: 15px 0 0 100px;
    .description{
      height: 50px;
    }
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .date{
    font-size: 13px;
    margin-top: 2px;
  }
`;

const Icon = styled.div`
    margin-right: 10px;
    svg{
      margin-right: 5px;
      width: 13px;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 100px 0 0;
    align-items: center;
    .logo{
      width: 75px;
    }
`;

const ForumA = styled.a`
    display: block;
    font-size: 18px;
`;

const Pagination = styled.div`
    margin-top: 30px;
    color: #3F51B5;
`;


function ForumHomePage(props: any) {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             {props.postList.map((post: any, index: number) => {
                return (
                    <ForumContentWrapper theme={index % 2 === 0 ? "full" : "half"}>
                       <ContentWrapper>
                          <NavLink to={`/post/${index + 1}`}>
                             <ForumA className="title">
                                {post.title}
                             </ForumA>
                          </NavLink>
                          <div className="description">{post.description}</div>
                          <StatWrapper>
                             <Icon>
                                <Comment className="icon"/>
                                2
                             </Icon>
                             <Icon>
                                <Heart className="icon"/>
                                3
                             </Icon>
                             <div className="date">{post.date}</div>
                          </StatWrapper>
                       </ContentWrapper>
                       <UserWrapper>
                          <img src={`${logo}`} alt="logo" className="logo"/>
                          {post.userName}
                       </UserWrapper>
                    </ForumContentWrapper>
                );
             })}
             <Pagination>
                1 2 3 4 ... 9 10
             </Pagination>
          </ForumWrapper>
       </Background>
   );


}

export default ForumHomePage;