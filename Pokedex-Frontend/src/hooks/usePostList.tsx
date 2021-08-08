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
         userId: userId,
         userName: userName,
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
            await swal("Add Post Successfully", "", "success");
         }
      }catch (error){
         await swal("Add Post Failed", "", "warning");
      }

   }

    const deletePost =  async (_id:string) => {
        let deleteInfo = {_id: _id};
        try{ const response = await axios.delete(`/api/posts/${_id}`, {data:deleteInfo});
            if (response.status === 204) {
                setPostList(await getPostList());
                await swal("Delete Post Successfully", "", "success");
            }
            return response.status;
        }catch (error){
            await swal("Delete Post Failed", "", "warning");
            return error.response.status;
        }

    }

    const updateUserPost =  async (_id:string, userName:string, avatar:string) => {
        let updateInfo = {
            userName: userName,
            avatar: avatar
        };
        try{
            const response = await axios.put(`/api/posts/update/${_id}`, updateInfo);
            if (response.status === 200) {
                setPostList(await getPostList());
            }
            return response.status;
        }catch (error){
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

   return {postList, setPostList, count, addPost, deletePost, getPost, getPostList, updateUserPost}
}
export {usePostList};