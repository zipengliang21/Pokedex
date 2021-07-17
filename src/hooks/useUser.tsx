import {useEffect, useState} from "react";
const axios = require('axios');

const localhostURL = "http://localhost:5000";
const productionURL = "https://pokedex-455-server.herokuapp.com";


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
      const response = await axios.get(`${localhostURL}/getCurrentUser`, { withCredentials: true });
      setCurrentUser(response.data.user);
      return response.data.user;
   }

   return {currentUser, setCurrentUser, getCurrentUser}
}
export {useUser};