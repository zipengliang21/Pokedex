import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/Common/SideBar";
import FilterSearchPage from "./views/FilterSearchPage";
import WelcomePage from "./views/WelcomePage";
import PokemonDetailsPage from "./views/PokemonDetailsPage";
import PokemonData from "./pokedexData.json";
import LoginPage from "views/LoginPage";
import Overview from "./components/Overview";
import Collection from "./components/Collection";

const Test = styled.span`
  position: fixed;
  left: 300px;
  top: 0;
`;

function App() {
   return (
      <Switch>
         <Route exact path="/login">
            <LoginPage />
         </Route>
         <Route exact path="/">
            <WelcomePage/>
         </Route>
         <Route exact path="/profile">
            <SideBar />
            <Test>Profile</Test>
         </Route>
         <Route exact path="/collections">
            <SideBar />
            <Test>collections</Test>
         </Route>
         <Route exact path="/myPosts">
            <SideBar />
            <Test>myPosts</Test>
         </Route>
         <Route exact path="/filterSearch">
            <FilterSearchPage />
         </Route>
         <Route exact path="/pokemonComments">
            <SideBar />
            <Test>Pokemon Comments</Test>
         </Route>
         <Route exact path="/Pokemon/:id"
                render={(props) => {
                   const index: number = parseInt(props.match.params.id);
                   return <PokemonDetailsPage pokemon={PokemonData[index-1]}/>;
                }}/>
      </Switch>
   );
}

export default App;
