import {useEffect, useState} from "react";
const axios = require('axios');

export interface IUser {
   _id?: string;
   userName: string;
   phone?: string;
   email: string;
   description?: string;
   avatar?: string;
   location?: string;
   password: string;
   confirmPassword?: string;
   isAdmin?: boolean;
   createdOn?: Date;
   updatedOn?: Date;
}


const useUser = () => {
   const [currentUser, setCurrentUser] = useState<IUser | null>(null);

   useEffect( () => {
      async function initialSet() {
         const init = await getCurrentUser();
         setCurrentUser(init);
      }
      initialSet();
   }, [])


   const getCurrentUser = async () => {
      let response: {data: {user: any}} = {data: {user: null}} ;
      try {
          response = await axios.get(`/api/getCurrentUser`, {withCredentials: true});
      }catch (e) {
         setCurrentUser(null);
      }
      if (response !== null) {
         setCurrentUser(response.data.user);
         return response.data.user;
      } else {
         setCurrentUser(null);
         return null;
      }

   }

   const logout = async () => {
      await axios.get(`/api/logout`, { withCredentials: true });
      setCurrentUser(null);
   }

   return {currentUser, setCurrentUser, getCurrentUser, logout}
}
export {useUser};