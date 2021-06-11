import React, { useState } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SearchBarDiv = styled.div`
  color: blue;
  label, input, button{
    margin-right: 10px;
  }
`


const SearchBar = () => {
    const [Key, setKey] = useState("");
    return (
        <SearchBarDiv>
            {/*action="/" method="get"*/}
            <form>
                <label htmlFor="header-search">
                    <FontAwesomeIcon icon="search"/>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search Pokemon names"
                    name="s"
                    onChange={(e) => setKey(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </SearchBarDiv>
    )
};



export default SearchBar;

