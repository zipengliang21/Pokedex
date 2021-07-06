import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/Common/SideBar";
import FilterSearchPage from "./views/FilterSearchPage";
import WelcomePage from "./views/WelcomePage";
import PokemonDetailsPage from "./views/PokemonDetailsPage";
import PokemonData from "./pokedexData.json";
import LoginPage from "views/LoginPage";
import OverviewPage from "./views/OverviewPage";
import CollectionPage from "./views/CollectionPage";
import ForumHomePage from "./views/ForumHomePage";
import ForumNewPostPage from "./views/ForumNewPostPage";
import PostDetailsPage from "views/PostDetailsPage";
import AdminManagePage from "views/AdminManagePage";
import AdminAddPage from "views/AdminAddPage";
import ForumData from "./ForumData.json";
import CommentData from "./CommentData.json"
import AdminPage from "./views/AdminPage";
import {usePokemonList} from "./hooks/usePokemonList";

function App() {
   const {pokemonList} = usePokemonList();
   const [postList, setPostList] = useState(ForumData);
   const [commentList, setCommentList] = useState(CommentData);
   return (
      <Switch>
         <Route exact path="/login">
            <LoginPage />
         </Route>
         <Route exact path="/admin">
            <AdminPage />
         </Route>
         <Route exact path="/">
            <WelcomePage pokemonList={pokemonList}/>
         </Route>
         <Route exact path="/profile">
            <OverviewPage/>
         </Route>
         <Route exact path="/collections">
            <CollectionPage/>
         </Route>
         <Route exact path="/admin/pokemon-manage">
            <AdminManagePage />
         </Route>
         <Route exact path="/admin/add">
            <AdminAddPage />
         </Route>
         <Route exact path="/advancedSearch">
            <FilterSearchPage />
         </Route>
         <Route exact path="/forum">
            <ForumHomePage postList ={postList}/>
         </Route>
         <Route exact path="/forum/newPost">
            <ForumNewPostPage add = {add}/>
         </Route>
         <Route exact path="/Pokemon/:id"
                render={(props) => {
                   const index: number = parseInt(props.match.params.id);
                   return <PokemonDetailsPage pokemon={PokemonData[index-1]}/>;
                }}/>
         <Route exact path="/post/:id"
                render={(props) => {
                   const index: number = parseInt(props.match.params.id);
                   return <PostDetailsPage rootPost ={postList[index - 1]}
                                           postID = {postList[index - 1].postID}
                                           addComment = {addComment}
                                           commentList = {commentList}/>;
                }}/>
      </Switch>
   );
    function add (title:string, description:string, content:string) {
        let postId = JSON.stringify(ForumData.length + 1);
        let newPost = {
            userId: "0003",
            userName: "default",
            postID: postId,
            title: title,
            description: description,
            content: content,
        }
        console.log(newPost);

        setPostList([...postList, newPost]);
    }

    function addComment (content:string, postID: string) {
        let commentID = JSON.stringify(commentList.length + 1);
        let newComment = {
            userId: "0007", //must get from other aspect
            userName: "default username", //must get from other aspect
            postID: postID,
            commentID: commentID,
            content: content
        }
        console.log(newComment);
        setCommentList([...commentList, newComment]);

        console.log(commentList);
    }

}

export default App;
