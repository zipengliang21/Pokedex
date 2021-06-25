import React from 'react';
import styled from "styled-components";
import SideBar from "../components/Common/SideBar";
import SearchBar from "../components/Common/SearchBar";
import DecorationBar from "../components/FilterSearch/DecorationBar";
import CheckBoxType from "../components/FilterSearch/CheckBoxType";
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const FilterSearchWrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   background: inherit;
   text-align: center;
`;

const FilterSearchContentWrapper = styled.section`
    display: flex;
    width: 850px;
    flex: auto;
    flex-direction: column;
    // min-height: 0;
    // width: 850px;
     margin: 0 auto;
     background: inherit;
     text-align: center;
    
     @media(max-width: 875px){
       width: 418px;
     }
     @media(max-width: 576px){
       width: 100%;
     }
    
`
// const Background = styled.div`
//    background: #f0f2f5 url("https://www.teahub.io/photos/full/206-2063227_free-christmas-background-christmas-background-light-blue.jpg");
//    background-size: cover;
// `


const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(140,140,140,0.8)
    // text-align: center;
`

const FilterSearchPage = () => {
   return (
       <Background>
       <FilterSearchWrapper>
          <FilterSearchContentWrapper>
             {/*<DecorationBar/>*/}
             <Header/>
             <NavBar/>
              <SearchBar/>
              <FilterWrapper>
                  <CheckBoxType/>
              </FilterWrapper>
             {/*<PokemonInfo/>*/}
          </FilterSearchContentWrapper>

       </FilterSearchWrapper>
       </Background>
   )
};

export default FilterSearchPage;
