import {Express} from "express";
import pokemon from "./pokemon/index";
import post from "./posts/index";
import comment from "./comments/index";
import profile from "./profile/index";
import user from "./user/index";
import {auth} from "../middleware/auth";


const setUpRoutes = (app: Express): void => {
    app.get("/api/posts/:_id", post.getPost);
    app.get("/api/posts/", post.getPostList);
    app.post("/api/posts/", post.createPost);
    app.delete("/api/posts/:_id", post.deletePost);
    app.put("/api/posts/update/:_id", post.updateUserPost);

    app.get("/api/pokemons/:_id", pokemon.getPokemon);
    app.get("/api/pokemons/", pokemon.getPokemonList);
    app.post("/api/pokemons/", pokemon.createPokemon);
    app.delete("/api/pokemons/:id", pokemon.deletePokemon);

    app.get("/api/comments/:_id", comment.getComment);
    app.get("/api/comments/", comment.getCommentList);
    app.get("/api/comments/post/:postID", comment.getCommentForPost);
    app.post("/api/comments/", comment.createComment);
    app.put("/api/comments/update/:_id", comment.updateUserComment);

    app.get("/api/profile/:_id", profile.getProfile);
    app.post("/api/profile/edit", profile.editProfile);
    app.post("/api/profile/avatar", profile.editAvatar);

    app.post("/api/login", user.login);
    app.post("/api/register", user.register);
    app.get("/api/getCurrentUser", auth, user.getCurrentUser);
    app.get("/api/logout", user.logout);
};

export default setUpRoutes;