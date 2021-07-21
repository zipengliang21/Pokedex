import React from "react";
import {Switch, Route} from "react-router-dom";
import FilterSearchPage from "./views/FilterSearchPage";
import WelcomePage from "./views/WelcomePage";
import PokemonDetailsPage from "./views/PokemonDetailsPage";
import LoginPage from "views/LoginPage";
import ForumHomePage from "./views/ForumHomePage";
import ForumNewPostPage from "./views/ForumNewPostPage";
import PostDetailsPage from "views/PostDetailsPage";
import AccountEditPage from "views/AcountEditPage";
import AdminAddPage from "views/AdminAddPage";
import AdminPage from "./views/AdminPage";
import {usePokemonList} from "./hooks/usePokemonList";
import {usePostList} from "./hooks/usePostList";
import {useCommentList} from "./hooks/useCommentList";
import Auth from "hoc/Auth";
import {useUser} from "./hooks/useUser";
import Header from "components/Common/Header";
import NavBar from "components/Common/NavBar";
import styled from "styled-components";

const Background = styled.div`
     background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
     no-repeat center center fixed rgba(161, 189, 198, 0.75);
     min-height: 100vh;
     background-size: cover;
     background-blend-mode: multiply;
`;

function App() {
   const {currentUser, setCurrentUser, getCurrentUser} = useUser();
   const {pokemonList, getPokemon} = usePokemonList();
   const {postList, addPost, getPost} = usePostList();
   const {commentList, addComment} = useCommentList();
   return (

       <Auth setCurrentUser={setCurrentUser} getCurrentUser={getCurrentUser}>
          <Background>
             <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
             <NavBar/>
             <Switch>
                <Route exact path="/login">
                   <LoginPage setCurrentUser={setCurrentUser}/>
                </Route>
                <Route exact path="/admin">
                   <AdminPage/>
                </Route>
                <Route exact path="/">
                   <WelcomePage pokemonList={pokemonList}/>
                </Route>
                <Route exact path="/profile">
                   <AccountEditPage/>
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
                              _id={props.match.params._id}
                              addComment={addComment}/>;
                       }}/>
             </Switch>
          </Background>
       </Auth>

   );
}

export default App;
