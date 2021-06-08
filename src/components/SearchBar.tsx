import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBarDiv = styled.form`
  color: blue;
  position: fixed;
  left: 300px;
  top: 0;

`

const SearchBar = () => (
    <SearchBarDiv>
        {/*action="/" method="get"*/}
    <form>
        <label htmlFor="header-search">
            {/*<span className="visually-hidden">Search!</span>*/}
            <FontAwesomeIcon icon="search"/>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Pokemon"
            name="s"
        />
        <button type="submit">Search </button>
    </form>
    </SearchBarDiv>
);

export default SearchBar;