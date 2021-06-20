import React from 'react';
import styled from "styled-components";
import SideBar from "../components/Common/SideBar";
import SearchBar from "../components/Common/SearchBar";
import DecorationBar from "../components/FilterSearch/DecorationBar";
import CheckBoxType from "../components/FilterSearch/CheckBoxType";

const FilterSearchWrapper = styled.div`
    display: flex;
    width: 850px;
    flex-direction: row;
    flex: auto;
    width: 100%;
    min-height: 100%;
    
`;

const FilterSearchContentWrapper = styled.section`
    display: flex;
    width: 850px;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    margin-left: 30%;
    
`
const Background = styled.div`
   background: #f0f2f5 url("https://www.teahub.io/photos/full/206-2063227_free-christmas-background-christmas-background-light-blue.jpg");
   background-size: cover;
`


const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const FilterSearchPage = () => {
   return (
       <Background>
       <FilterSearchWrapper>
          {/*<SideBar/>*/}
          <FilterSearchContentWrapper>
             <DecorationBar/>
              <SearchBar/>
              <FilterWrapper>
                  {/*<SearchBar/>*/}
                  <CheckBoxType/>
              </FilterWrapper>
             {/*<PokemonInfo/>*/}
          </FilterSearchContentWrapper>

       </FilterSearchWrapper>
       </Background>
   )
};

export default FilterSearchPage;
