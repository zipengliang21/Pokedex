import React from "react";
import {Switch, Route} from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/FilterSearch/SideBar";
import FilterSearchPage from "./views/FilterSearchPage";

const Test = styled.span`
  position: fixed;
  left: 300px;
  top: 0;
`;

function App() {
   return (
       <Switch>
          <Route exact path="/Pokemon">
             <SideBar/>
             <Test>Home</Test>
          </Route>
          <Route exact path="/Pokemon/profile">
             <SideBar/>
             <Test>Profile</Test>
          </Route>
          <Route exact path="/Pokemon/filterSearch">
            <FilterSearchPage/>
          </Route>
          <Route exact path="/Pokemon/pokemonComments">
             <SideBar/>
             <Test>Pokemon Comments</Test>
          </Route>
       </Switch>
   );
}

export default App;
