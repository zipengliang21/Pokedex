import React from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import styled from "styled-components";
import DecorationBar from "./components/DecorationBar";
import Login from "./components/Login"

const Test = styled.span`
  position: fixed;
  left: 300px;
  top: 0;
`;

function App() {
  return (
      // <Switch>
      //    <Route exact path="/Pokemon">
      //       <NavBar />
      //       <Test>Home</Test>
      //    </Route>
      //    <Route exact path="/Pokemon/profile">
      //       <NavBar />
      //       <Test>Profile</Test>
      //    </Route>
      //    <Route exact path="/Pokemon/filterSearch">
      //       <NavBar />
      //       {/*<Test>Filter Search</Test>*/}
      //        <SearchBar/>
      //        <FilterBar/>
      //        <DecorationBar/>
      //    </Route>
      //    <Route exact path="/Pokemon/pokemonComments">
      //       <NavBar />
      //       <Test>Pokemon Comments</Test>
      //    </Route>
      // </Switch>
   <Login/>

  );
}

export default App;
