import {useEffect, useState} from "react";
const axios = require('axios');

const localhostURL = "http://localhost:5000";
const productionURL = "https://pokedex-455-server.herokuapp.com";


interface Comment {
   userId: string;
   userName: string;
   postID: string;
   commentID: number;
   content: string;
}

// Create a custom React Hook for Comment List
const useCommentList = () => {
   const [commentList, setCommentList] = useState<Comment[]>([]);
   const [count, setCount] = useState<number>(0)

   useEffect( () => {
      async function initialSet() {
         const initCommentList = await getCommentList();
         const initCount = initCommentList.length;
         setCommentList(initCommentList);
         setCount(initCount);
      }
      initialSet();
   }, [])

   const addComment = async (content:string, postID: string) => {
      let commentID = getCount() + 1;
      let newComment: Comment = {
         userId: "0007", //must get from other aspect
         userName: "default username", //must get from other aspect
         postID: postID,
         commentID: commentID,
         content: content
      };
      await axios.post(`${localhostURL}/comments/`, newComment);
      setCommentList(await getCommentList());
   }

   const getComment = async (_id: string) => {
      const response = await axios.get(`${productionURL}/comments/${_id}`);
      return response.data.comment;
   }

   const getCommentList = async (): Promise<Comment[]> => {
      const response = await axios.get(`${productionURL}/comments/`);
      return response.data.commentList;
   }

   const getCount = () => {
      return count;
   }

   return {commentList, setCommentList, addComment, getComment, getCommentList}
}
export {useCommentList};