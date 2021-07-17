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
import Auth from "hoc/Auth";
import {useUser} from "./hooks/useUser";
import Header from "components/Common/Header";
import NavBar from "components/Common/NavBar";

function App() {
   const {currentUser, setCurrentUser, getCurrentUser} = useUser();
   const {pokemonList, getPokemon} = usePokemonList();
   const {postList, addPost, getPost} = usePostList();
   const {commentList, addComment} = useCommentList();
   return (
       <Auth setCurrentUser={setCurrentUser} getCurrentUser={getCurrentUser}>
          <Switch>
             <Route exact path="/login">
                <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
             </Route>
             <Route exact path="/admin">
                <AdminPage/>
             </Route>
             <Route exact path="/">
                <WelcomePage pokemonList={pokemonList} currentUser={currentUser}/>
             </Route>
             <Route exact path="/profile">
                <AccountEditPage currentUser={currentUser}/>
             </Route>
             <Route exact path="/admin/add">
                <AdminAddPage currentUser={currentUser}/>
             </Route>
             <Route exact path="/advancedSearch">
                <FilterSearchPage pokemonList={pokemonList} currentUser={currentUser}/>
             </Route>
             <Route exact path="/forum">
                <ForumHomePage postList={postList} currentUser={currentUser}/>
             </Route>
                <Route exact path="/forum/newPost">
                   <ForumNewPostPage addPost={addPost} currentUser={currentUser}/>
                </Route>
             <Route exact path="/Pokemon/:_id"
                    render={(props) => {
                       return <PokemonDetailsPage _id={props.match.params._id}
                                                  getPokemon={getPokemon} currentUser={currentUser}/>;
                    }}/>
             <Route exact path="/post/:_id"
                    render={(props) => {
                       return <PostDetailsPage
                           _id={props.match.params._id}
                           addComment={addComment}
                           currentUser = {currentUser}/>;
                    }}/>
          </Switch>
       </Auth>
   );
}

export default App;
