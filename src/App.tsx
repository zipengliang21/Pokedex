import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import WelcomeLoginButton from "./components/WelcomeLoginButton";
import Login from "./components/Login";
import SideBar from "./components/FilterSearch/SideBar";
import FilterSearchPage from "./views/FilterSearchPage";
import HomeCardNode from "./components/HomeCardNode";
import HomeListPokemon from "./components/HomeListPokemon";

const Test = styled.span`
  position: fixed;
  left: 300px;
  top: 0;
`;

function App() {
   return (
      <Switch>
         <Route exact path="/login">
            <Login />
         </Route>
         <Route exact path="/">
            <WelcomeLoginButton />
         </Route>
         <Route exact path="/profile">
            <SideBar />
            <Test>Profile</Test>
         </Route>
         <Route exact path="/filterSearch">
            <FilterSearchPage />
         </Route>
         <Route exact path="/pokemonComments">
            <SideBar />
            <Test>Pokemon Comments</Test>
         </Route>
      </Switch>
   );
}

export default App;
