import styled from "styled-components";
import React from "react";

const PostWrapper = styled.div`
  left: 300px;
  width: 850px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 100px auto 0 auto;
  border-style: solid;
  border-color: lightblue;
  img{
    margin: 10px 100px 50px 100px;
  }
  header{
    margin: 100px 0 0 200px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const UserInfoWrapper = styled.div`
  width: 297px;
  left:  850px;
  display: flex;
  flex-direction: column;
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=216097513,3138152855&fm=26&gp=0.jpg");
  background-size: cover;
  img{
    margin: 0px 0px 0px 100px;
  }
  header{
    margin: 10px 100px 0px 0px;
    font-weight: 600;
    font-size: 14px;
  }
`;


const TextWrapper = styled.div`
  width: 548px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#f5f5dc, white);
  p{
    // margin: 100px 0 0 200px;
    font-weight: 600;
    font-size: 14px;
  }
`;

const HeadBarWrapper = styled.div`
  width: 846px;
  height: 40px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(lightblue, white);
  span{
    font-weight: 600;
    font-size: 14px;
  }
`;

const PostBodyWrapper = styled.div`
  width: 848px;
  height: 410px;
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-color: #f5f5dc;
`;


const ForumPost = ({post}: any) => {

    return(
        <PostWrapper>
            <HeadBarWrapper>
                <span>the post time: 2021-6-11</span>
                <span> #1 </span>
            </HeadBarWrapper>
            <PostBodyWrapper>
            <TextWrapper>
                <p>For various technical reasons, I'm considering ditching the forums, front page stuff, user logins—basically everything but the Pokédex itself. I'd like to resurrect that stuff in some other form later+elsewhere, but for now I'm definitely regretting trying to build the Pokédex as just one part of a larger site when it's clearly not. This might encourage me to actually work on the 'dex more again, too. Maybe.

                    Does anyone, like, care? These are not exactly high-traffic forums, but it seems polite to ask</p>
                </TextWrapper>

            <UserInfoWrapper>
            <img src="https://lh3.googleusercontent.com/proxy/hkEz56ukP_cO9Xc_pMmBqg12yAnoZAa2Z5JDjvyULTtiE_SiiVmMS12jK9x35Yvw_k0lfeAF3I8VB2WjnZyg6b9kv3GlAL_a5BlAHw"
                 width={150}
                 height={150}
                 alt="no thing"/>
                <header> UserName</header>
            </UserInfoWrapper>
            </PostBodyWrapper>
        </PostWrapper>
    );
}
export default ForumPost;

