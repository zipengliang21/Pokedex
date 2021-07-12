import styled from "styled-components";
import React, {useState} from "react";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ForumHeader from "../components/Forum/ForumHeader";
import Comment from "../components/Icon/ForumIcon/Comment"
import {NavLink} from "react-router-dom";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import moment from 'moment';
import Heart from "components/Icon/ForumIcon/Heart";
import Fade from "react-reveal/Fade";
import ReactPaginate from "react-paginate";

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

const ForumContentWrapper = styled.section`
    display: flex;
    max-width: 800px;
    min-width: 100%;
    min-height: 125px;
    background: ${props => props.theme === "half" ? "rgba(186, 235, 186, 0.7)" : "#BAEBBA"};
    border-bottom: 1px solid #472079;
    justify-content: space-between;
    text-align: left;
    @media(max-width: 875px){
      justify-content: center;
    }
`;

const ContentWrapper = styled.div`
    margin: 15px 0 0 100px;
    .description{
      max-width: 220px;
      min-height: 60px;
    }
    @media(max-width: 875px){
      margin: 15px 0 0 0;
      word-wrap: break-word;
      .description{
         max-width: 200px;
      }
    }
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  word-break: break-word;
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
    margin: auto 100px auto 0;
    align-items: center;
    .logo{
      width: 75px;
    }
    @media(max-width: 875px){
      margin: auto 0;
    }
    @media(max-width: 576px){
      align-items: center;
    }
    @media(max-width: 320px){
     display: none;
    }
`;

const ForumA = styled.a`
    font-weight: 600;
    max-width: 250px;
    max-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    font-size: 18px;
    @media(max-width: 875px){
      word-wrap: break-word;
      max-width: 200px;
    }
`;

const Pagination = styled.div`
    display: flex;
    color: #3F51B5;
      .pagination{
        margin: 30px auto;
        display: flex;
        outline: none;
      }
      .pagination > .active > a{
        background-color: #3F51B5 ;
        border-color: #EAEAEA ;
        color: #EAEAEA;
      }
      .pagination > li > a{
        margin: 1px;
        border-radius: 5px;
        color: #3F51B5;
        padding: 3px 12px;
        outline: none;
        cursor: pointer;
        font-weight: 600;
      } 
      .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
        background-color: #3F51B5 ;
        border:1px solid #3F51B5;
      }
      .previous{
        margin-right: 10px;
      }
      .next{
        margin-left: 10px;
      }
`;


function ForumHomePage(props: any) {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   const [offset, setOffset] = useState(0);
   const handlePageClick = (e: any) => {
      const selectedPage = e.selected;
      console.log(selectedPage + 1);
      setOffset(selectedPage);
   };
   return (
       <Background>
          <Header/>
          <NavBar/>
          <ForumHeader/>
          <ForumWrapper>
             <ForumSubHeader/>
             {props.postList.slice(offset * 10, offset * 10 + 10).map((post: any, index: number) => {
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
                                <Heart className="icon" color="black"/>
                                3
                             </Icon>
                             <div className="date">{moment(post.date).format('YYYY-MM-DD HH:mm:ss')}</div>
                          </StatWrapper>
                       </ContentWrapper>
                       <UserWrapper>
                          <img src={`${logo}`} alt="logo" className="logo"/>
                          {post.userName}
                       </UserWrapper>
                    </ForumContentWrapper>
                );
             })}
             <Fade bottom>
                {/*<Button className="loadMore">Load More Pokemon</Button>*/}
                <Pagination>
                   <ReactPaginate containerClassName="pagination"
                                  marginPagesDisplayed={2}
                                  pageCount={Math.ceil(props.postList.length/10)}
                                  pageRangeDisplayed={2}
                                  activeClassName={"active"}
                                  previousLabel="Prev"
                                  nextLabel="Next"
                                  previousClassName="previous"
                                  nextClassName="next"
                                  onPageChange={handlePageClick}
                                  />
                </Pagination>
             </Fade>
          </ForumWrapper>
       </Background>
   );


}

export default ForumHomePage;