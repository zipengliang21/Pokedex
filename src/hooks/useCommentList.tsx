import {useEffect, useState} from "react";
const axios = require('axios');

interface Comment {
   userId: string;
   userName: string;
   postID: string;
   commentID: number;
   content: string;
   avatar:string;
   date: Date;
}


// Create a custom React Hook for Comment List
const useCommentList = () => {
   const [commentList, setCommentList] = useState<Comment[]>([]);
   const [count, setCount] = useState<number>(0);
   const [filteredComment, setFilteredComment] = useState<Comment[]>([]);


   useEffect( () => {
      async function initialSet() {
         const initCommentList = await getCommentList();
         const initCount = initCommentList.length;
         setCommentList(initCommentList);
         setCount(initCount);
      }
      initialSet();
   }, [])

   const addComment = async (content:string, postID: string, userName: string, userID:string, avatar:string) => {
      let commentID = getCount() + 1;
      let date = new Date();
      let newComment: Comment = {
         userId: userID, //must get from other aspect
         userName: userName, //must get from other aspect
         postID: postID,
         commentID: commentID,
         content: content,
         avatar: avatar,
         date: date
      };
      await axios.post(`/api/comments/`, newComment);
      setCommentList(await getCommentList());
      setFilteredComment(await getCommentForPost(postID));
      return newComment;
   }

   const getComment = async (_id: string) => {
      const response = await axios.get(`/api/comments/${_id}`);
      return response.data.comment;
   }

   const getCommentList = async (): Promise<Comment[]> => {
      const response = await axios.get(`/api/comments/`);
      return response.data.commentList;
   }

   const getCommentForPost = async (postID: string):Promise<Comment[]> => {
      const response = await axios.get(`/api/comments/post/${postID}`);
      setFilteredComment(response.data.comment);
      return response.data.comment;
   }
   const getCount = () => {
      return count;
   }

   return {commentList, setCommentList, filteredComment, setFilteredComment, getCommentForPost, addComment, getComment, getCommentList}
}
export {useCommentList};