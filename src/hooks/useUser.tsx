import {useEffect, useState} from "react";
const axios = require('axios');
const server = 'https://pokedex-455-server.herokuapp.com';

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

// Create a custom React Hook for User
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
          response = await axios.get(`${server}/api/getCurrentUser`, {withCredentials: true});
      }catch (e) {
         console.log("catch user get no current user");
         setCurrentUser(null);
      }
      if (response !== null) {
         setCurrentUser(response.data.user);
      } else {
         setCurrentUser(null);
      }
      return response.data.user;
   }

   const logout = async () => {
      await axios.get(`${server}/api/logout`, { withCredentials: true });
      setCurrentUser(null);
   }

   return {currentUser, setCurrentUser, getCurrentUser, logout}
}
export {useUser};