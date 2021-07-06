import React from "react";
import {Switch, Route} from "react-router-dom";
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
import AdminPage from "./views/AdminPage";
import {usePokemonList} from "./hooks/usePokemonList";
import {usePostList} from "./hooks/usePostList";
import {useCommentList} from "./hooks/useCommentList";

function App() {
   const {pokemonList} = usePokemonList();
   const {postList, addPost} = usePostList();
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
             <FilterSearchPage/>
          </Route>
          <Route exact path="/forum">
             <ForumHomePage postList={postList}/>
          </Route>
          <Route exact path="/forum/newPost">
             <ForumNewPostPage addPost={addPost}/>
          </Route>
          <Route exact path="/Pokemon/:id"
                 render={(props) => {
                    const index: number = parseInt(props.match.params.id);
                    return <PokemonDetailsPage pokemon={PokemonData[index - 1]}/>;
                 }}/>
          <Route exact path="/post/:id"
                 render={(props) => {
                    const index: number = parseInt(props.match.params.id);
                    return <PostDetailsPage rootPost={postList[index - 1]}
                                            postID={postList[index - 1].postID}
                                            addComment={addComment}
                                            commentList={commentList}/>;
                 }}/>
       </Switch>
   );
}

export default App;
