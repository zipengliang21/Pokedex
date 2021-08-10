import styled from "styled-components";
import React, {useState} from "react";
import ForumHeader from "../components/Forum/ForumHeader";
import {NavLink} from "react-router-dom";
import ForumSubHeader from "../components/Forum/ForumSubHeader";
import moment from "moment";
import Fade from "react-reveal/Fade";
import ReactPaginate from "react-paginate";
import {useIntl} from "react-intl";
import Spinner from "../components/Common/Spinner";
import {usePostList} from "../hooks/usePostList";


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
    const [offset, setOffset] = useState(0);
    const {postList} = usePostList();
    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage);
    };
    const intl = useIntl();
    let data = <Spinner/>;
    if(postList.length !== 0) {
        data = <div>
            {postList.slice(offset * 10, offset * 10 + 10).map((post: any, index: number) => {
                return (
                    <ForumContentWrapper theme={index % 2 === 0 ? "full" : "half"}>
                        <ContentWrapper>
                            <NavLink to={`/post/${post._id}`}>
                                <ForumA className="title">
                                    {post.title}
                                </ForumA>
                            </NavLink>
                            <div className="description">{post.description}</div>
                            <StatWrapper>
                                <div className="date">{moment(post.date).format("YYYY-MM-DD HH:mm:ss")}</div>
                            </StatWrapper>
                        </ContentWrapper>
                        <UserWrapper>
                            <img src={post.avatar} alt="logo" className="logo" width={100} height={75}/>
                            {post.userName}
                        </UserWrapper>
                    </ForumContentWrapper>
                );
            })}
            <Fade bottom>
                <Pagination>
                    <ReactPaginate containerClassName="pagination"
                                   marginPagesDisplayed={2}
                                   pageCount={Math.ceil(postList.length / 10)}
                                   pageRangeDisplayed={2}
                                   activeClassName={"active"}
                                   previousLabel={intl.formatMessage({id: "PrevPage"})}
                                   nextLabel={intl.formatMessage({id: "NextPage"})}
                                   previousClassName="previous"
                                   nextClassName="next"
                                   onPageChange={handlePageClick}
                    />
                </Pagination>
            </Fade>
        </div>
    }

    return (
        <div>
            <ForumHeader/>
            <ForumWrapper>
                <ForumSubHeader/>
                {data}
            </ForumWrapper>
        </div>
    );


}

export default ForumHomePage;