import {useEffect, useState} from "react";
import swal from "sweetalert";
const axios = require('axios');

interface Post {
    _id:string;
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
      let newPost = {
         userId: userId, //get from other aspect
         userName: userName,  //get from other aspect
         postID: postId,
         title: title,
         description: description,
         content: content,
         avatar: avatar,
         date: date
      }

      try {
         const response = await axios.post(`/api/posts/`, newPost);
         if (response.status === 201) {
            setPostList(await getPostList());
            await swal("add post successfully", "", "success");
         }
      }catch (error){
         await swal("add post Failed", "", "warning");
      }

   }

    const deletePost =  async (_id:string) => {
        let deleteInfo = {_id: _id};
        try{ const response = await axios.delete(`/api/posts/${_id}`, {data:deleteInfo});
            if (response.status === 204) {
                setPostList(await getPostList());
                await swal("delete post successfully", "", "success");
            }
            return response.status;
        }catch (error){
            await swal("delete post Failed", "", "warning");
            return error.response.status;
        }

    }

   const getPost = async (_id: string):Promise<Post> => {
      const response = await axios.get(`/api/posts/${_id}`);
      return response.data.post[0];
   }

   const getPostList = async () => {
      const response = await axios.get(`/api/posts/`);
      return response.data.postList;
   }

   const getCount = () => {
      return count;
   }

   return {postList, setPostList, count, addPost, deletePost, getPost, getPostList}
}
export {usePostList};