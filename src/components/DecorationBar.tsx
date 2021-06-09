import * as React from "react";

import styled from "styled-components";
import * as ReactDOM from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// const pokemonDec = require('./image/poke2.jpg');
const DecorBarDiv = styled.div`
  position: fixed;
  width: 90%;
  height: 150px;
  left: 236px;
  top: 50px;
  background-image: url("https://p.favim.com/orig/2018/08/14/cute-pokemon-beautiful-Favim.com-6162832.jpg")
 
`

const DecorationBar = () => {
    return (
        <DecorBarDiv>
            {/*action="/" method="get"*/}
        </DecorBarDiv>
    )
};

export default DecorationBar;

