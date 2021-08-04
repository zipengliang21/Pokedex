import React, {Fragment, useEffect, useState} from "react";
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
import {usePokemonList} from "./hooks/usePokemonList";
import {usePostList} from "./hooks/usePostList";
import {useCommentList} from "./hooks/useCommentList";
import Auth from "hoc/Auth";
import {useUser} from "./hooks/useUser";
import Header from "components/Common/Header";
import NavBar from "components/Common/NavBar";
import styled from "styled-components";
import {useLanguage} from "./hooks/useLanguage";
import {I18nProvider} from "./i18n";

const Background = styled.div`
     background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
     no-repeat center center fixed rgba(161, 189, 198, 0.75);
     min-height: 100vh;
     background-size: cover;
     background-blend-mode: multiply;
`;

function App() {
    const {currentUser, setCurrentUser, getCurrentUser, logout} = useUser();
    const {pokemonList, getPokemon} = usePokemonList();
    const {postList, addPost, getPost} = usePostList();
    const {commentList, addComment} = useCommentList();
    const {language, setLanguage} = useLanguage();
    // const [isAuth, setIsAuth] = useState(false);
    // useEffect(() => {
    //    if (currentUser !== undefined && currentUser !== null) {
    //       setIsAuth(true);
    //    }
    // }, [currentUser]);
    console.log(language);
    return (

                <Auth setCurrentUser={setCurrentUser} getCurrentUser={getCurrentUser}>
                    <Background>
                        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} logout={logout}
                                language={language} setLanguage={setLanguage}/>
                        <NavBar/>
                        <Switch>
                            <Route exact path="/login">
                                <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
                                           currentUser={currentUser}/>;
                                   }}/>
                        </Switch>
                    </Background>
                </Auth>

    );
}

export default App;
