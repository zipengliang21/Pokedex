import {useEffect, useState} from "react";
const axios = require('axios');

const localhostURL = "http://localhost:5000";
const productionURL = "https://pokedex-455-server.herokuapp.com";


interface Post {
   userId: string;
   userName: string;
   postID: string;
   title: string;
   description: string;
   content: string;
   avatar: string;
   date:Date;
}

// Create a custom React Hook for Post List
const usePostList = () => {
   const [postList, setPostList] = useState<Post[]>([]);
   const [count, setCount] = useState<number>(0);

   useEffect( () => {
      async function initialSet() {
         const initPostList = await getPostList();
         const initCount = initPostList.length;
         setPostList(initPostList);
         setCount(initCount);
      }
      initialSet();
   }, [])

   const addPost = async (title:string, description:string, content:string, userName:string, userId:string, avatar:string) => {
      let postList = await getPostList();
      let postId: string = (postList.length + 1).toString();
      let date = new Date();
      let newPost: Post = {
         userId: userId, //get from other aspect
         userName: userName,  //get from other aspect
         postID: postId,
         title: title,
         description: description,
         content: content,
         avatar: avatar,
         date: date
      }
      console.log(newPost);
      await axios.post(`${localhostURL}/posts/`, newPost);
      setPostList(await getPostList());

   }

   const getPost = async (_id: string):Promise<Post> => {
      const response = await axios.get(`${localhostURL}/posts/${_id}`);
      return response.data.post[0];
   }

   const getPostList = async () => {
      const response = await axios.get(`${localhostURL}/posts/`);
      return response.data.postList;
   }

   const getCount = () => {
      return count;
   }

   return {postList, setPostList, count, addPost, getPost, getPostList}
}
export {usePostList};