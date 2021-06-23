import styled from "styled-components";
import React from "react";
import SideBar from "../Common/SideBar";
import DecorationBar from "../FilterSearch/DecorationBar";


const ForumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // flex: auto;
  width: 100%;
  min-height: 100%;
  background: #f5f5dc;
`;

const ForumContentWrapper = styled.section`
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5 url("https://www.teahub.io/photos/full/206-2063227_free-christmas-background-christmas-background-light-blue.jpg");
    background-size: cover;
`
const ForumHeaderWrapper = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(lightblue, white);
    justify-content: space-between;
    span{
    font-weight: 600;
    font-size: 24px;
  }
`

const ForumTr = styled.tr`
    border-style: solid;
    border-color: brown;
    justify-content: space-between;
    background: white;
  
`
const ForumA = styled.a`
    background: #f5f5dc;
    width: 950px;
    display: block;
    font-size: 24px;
    background: transparent;
  }
`
const ForumTdName = styled.td`
    background: #f5f5dc;
    text-align: left;
    width:90vh;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
`




function RoughForum(props:any) {
    return(
        <ForumWrapper>
            <SideBar />
            <ForumContentWrapper>
                <DecorationBar/>
                <ForumHeaderWrapper>
                <span>Threads</span>
                <span>Posts</span>
                </ForumHeaderWrapper>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>
                <ForumTr>

                    <ForumTdName ><ForumA href="https://veekun.com/forums/1/threads/102">Considering a split</ForumA></ForumTdName>
                    <ForumTdName>9 posts</ForumTdName>

                </ForumTr>

            </ForumContentWrapper>
        </ForumWrapper>
    );


}

export default RoughForum;