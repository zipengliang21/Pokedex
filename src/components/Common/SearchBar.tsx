import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';


// const SearchBarDiv = styled.div`
//   color: blue;
//   background: gray;
//   form, input, button{
//     margin-left: 10px;
//   }
//   @media(max-width: 576px){
//     form, input, button{
//       margin-top: 15px;
//       margin-left: 0;
//     }
//   }
// `
const SearchWrapper = styled.div`
  background: gray;
  width: 850px;
  display: flex;
  flex: auto;
  flex-direction: row;
  // margin-left: 30%;
  h2, button{
    margin-left: 75px;
  }
  form input {
  margin-left: 65px;
  }
  @media(max-width: 576px){
    form, input, button{
      margin-top: 15px;
      margin-left: 0;
    }
  }
  
`
const SearchLeftWrapper = styled.div`
  background: gray;
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: left;
  padding: 15px;
  form, button{
    margin-left: 10px;
  }
  h2 {
  font-weight: 600;
  font-size: 16px;
  color: white;
  }
  p {
  margin-top: 20px;
  padding: 20px;
  background: green;
  color: white;
  }
  @media(max-width: 576px){
    form, input, button{
      margin-top: 15px;
      margin-left: 0;
    }
  }
  
`

function SearchBar (props:any){
    const [Key, setKey] = useState("");

    const handleSubmit = (event:any) => {
        setKey(event.target.value);
    };
    return (
        <SearchWrapper>
            {/*action="/" method="get"*/}
            <SearchLeftWrapper>
            <h2>Name</h2>
            <form>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search Pokemon names"
                    name="s"
                    onChange={(e) => setKey(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    <label htmlFor="header-search">
                        <FontAwesomeIcon icon="search"/>
                    </label>
                </Button>
            </form>
                <h2>Use the advanced Search to explore Pokemons by different filters</h2>
            </SearchLeftWrapper>
            <SearchLeftWrapper>
            <p>Search for a Pokemon by name</p>
            </SearchLeftWrapper>
        </SearchWrapper>
    )
}



export default SearchBar;

