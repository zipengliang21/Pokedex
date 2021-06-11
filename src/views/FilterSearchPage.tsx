import React from 'react';
import styled from "styled-components";
import SideBar from "../components/FilterSearch/SideBar";
import SearchBar from "../components/FilterSearch/SearchBar";
import FilterBar from "../components/FilterSearch/FilterBar";
import DecorationBar from "../components/FilterSearch/DecorationBar";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";
import CheckBoxGrowth from "../components/FilterSearch/CheckBoxGrowth";
import CheckBoxType from "../components/FilterSearch/CheckBoxType";

const FilterSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: auto;
    width: 100%;
    min-height: 100%;
`;

const FilterSearchContentWrapper = styled.section`
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5;
    background-image: url("https://www.teahub.io/photos/full/206-2063227_free-christmas-background-christmas-background-light-blue.jpg");
    background-size: cover;
`

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    // top: 1000px;
`

const FilterSearchPage = () => {
   return (
       <FilterSearchWrapper>
          <SideBar/>
          <FilterSearchContentWrapper>
             <DecorationBar/>
              <SearchWrapper>
                  <SearchBar/>
                  <CheckBoxType/>
              </SearchWrapper>
             <PokemonInfo/>
          </FilterSearchContentWrapper>

       </FilterSearchWrapper>
   )
};

export default FilterSearchPage;
