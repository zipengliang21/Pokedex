import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';


const SearchBarDiv = styled.div`
  color: blue;
  left: 300px;
  top: 25px;

`

function SearchBar (props:any){
    const [Key, setKey] = useState("");

    const handleSubmit = (event:any) => {
        setKey(event.target.value);
    };
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
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Search
                </Button>
            </form>
        </SearchBarDiv>
    )
};



export default SearchBar;

