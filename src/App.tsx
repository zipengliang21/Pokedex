import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import FilterSearchPage from "./views/FilterSearchPage";
import WelcomePage from "./views/WelcomePage";
import PokemonDetailsPage from "./views/PokemonDetailsPage";
import LoginPage from "views/LoginPage";
import OverviewPage from "./views/OverviewPage";
import CollectionPage from "./views/CollectionPage";
import ForumHomePage from "./views/ForumHomePage";
import ForumNewPostPage from "./views/ForumNewPostPage";
import PostDetailsPage from "views/PostDetailsPage";
import AccountEditPage from "views/AcountEditPage";
import AdminManagePage from "views/AdminManagePage";
import AdminAddPage from "views/AdminAddPage";
import AdminPage from "./views/AdminPage";
import {usePokemonList} from "./hooks/usePokemonList";
import {usePostList} from "./hooks/usePostList";
import {useCommentList} from "./hooks/useCommentList";

function App() {
   const {pokemonList, getPokemon} = usePokemonList();
   const {postList, addPost, getPost} = usePostList();
   const {commentList, addComment} = useCommentList();
   return (
       <Switch>
          <Route exact path="/login">
             <LoginPage/>
          </Route>
          <Route exact path="/admin">
             <AdminPage/>
          </Route>
          <Route exact path="/">
             <WelcomePage pokemonList={pokemonList}/>
          </Route>
          <Route exact path="/profile">
             <OverviewPage/>
          </Route>
          <Route exact path="/profile/edit">
             <AccountEditPage />
          </Route>
          <Route exact path="/collections">
             <CollectionPage/>
          </Route>
          <Route exact path="/admin/pokemon-manage">
             <AdminManagePage/>
          </Route>
          <Route exact path="/admin/add">
             <AdminAddPage/>
          </Route>
          <Route exact path="/advancedSearch">
             <FilterSearchPage pokemonList={pokemonList}/>
          </Route>
          <Route exact path="/forum">
             <ForumHomePage postList={postList}/>
          </Route>
          <Route exact path="/forum/newPost">
             <ForumNewPostPage addPost={addPost}/>
          </Route>
          <Route exact path="/Pokemon/:_id"
                 render={(props) => {
                     return <PokemonDetailsPage _id={props.match.params._id}
                                                getPokemon={getPokemon}/>;
                 }}/>
          <Route exact path="/post/:_id"
                 render={(props) => {
                    return <PostDetailsPage
                        _id = {props.match.params._id}
                        addComment={addComment}/>;
                 }}/>
       </Switch>
   );
}

export default App;
