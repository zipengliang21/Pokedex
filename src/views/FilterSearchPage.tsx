import React from 'react';
import styled from "styled-components";
import SideBar from "../components/FilterSearch/SideBar";
import SearchBar from "../components/FilterSearch/SearchBar";
import FilterBar from "../components/FilterSearch/FilterBar";
import DecorationBar from "../components/FilterSearch/DecorationBar";
import PokemonInfo from "../components/FilterSearch/PokemonInfo";

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
`

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const FilterSearchPage = () => {
   return (
       <FilterSearchWrapper>
          <SideBar/>
          <FilterSearchContentWrapper>
             <SearchWrapper>
                <SearchBar/>
                <FilterBar/>
             </SearchWrapper>
             <DecorationBar/>
             <PokemonInfo/>
          </FilterSearchContentWrapper>
       </FilterSearchWrapper>
   )
};

export default FilterSearchPage;
