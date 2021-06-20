import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";


const SearchBarWrapper = styled.div`
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  color: blue;
  padding: 20px 0;
  .left{
    text-align: left;
    margin-left: 80px;
    .title{
      font-size: 20px;
      color: #04266D;
      font-weight: bold;
    }
    .note{
      margin: 10px 0;
      width: 280px;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
  .right{
    display: flex;
    width: 400px;
    margin: auto;
    padding: 10px 0;
    background: #59B937;
    color: #FFFFFF;
    border-radius: 10px;
    align-items: center;
    text-align: center;
  }
  .searchButton{
    color: white;
    background: linear-gradient(90deg, rgba(116, 230, 154, 0.72) 0%, rgba(139, 212, 212, 0.920305) 51.43%);
    border-radius: 5px;
    margin-left: 10px;
    padding: 4px;
    border: none;
  }
  #search{
    border-radius: 5px;
    height: 28px;
    border: 3px solid #04266D;
  }
 
  @media(max-width: 576px){
    form, input, button{
      margin-top: 15px;
      margin-left: 0;
    }
  }
`;

function SearchBar(props: any) {
   const [Key, setKey] = useState("");

   const handleSubmit = (event: any) => {
      setKey(event.target.value);
   };
   return (
       <SearchBarWrapper>
          <div className="left">
             <div className="title">Name or Number</div>
             <form>
                <input
                    type="text"
                    id="search"
                    placeholder="Search Pokemon names"
                    name="s"
                    onChange={(e) => setKey(e.target.value)}
                />
                <button onClick={handleSubmit} className="searchButton">
                   <FontAwesomeIcon icon="search"/>
                </button>
             </form>
             <div className="note">Use the Advanced Search to explore Pokemon by different filters</div>
          </div>
          <div className="right">Search for a Pokemon by name or using its National Pokedex number.</div>
       </SearchBarWrapper>
   );
}


export default SearchBar;

