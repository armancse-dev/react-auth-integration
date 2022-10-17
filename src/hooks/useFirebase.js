import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

initAuthentication();

const useFirebse = () =>{
   const [user, setUser] =  useState({});
   const [error, setError] = useState('');
   
   const auth =  getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = () =>{
      signInWithPopup(auth, googleProvider)
      .then(result => {
         console.log(result.user);
         setUser(result.user);

      })
      .catch(error => {
         setError(error.message);
      })
   }

   useEffect( () => {
      onAuthStateChanged(auth, user => {
         if(user){
            console.log('inside state change',user);
            setUser(user);
         }
      })
   }, [])

   return{
      user,
      error,
      signInUsingGoogle
   }
}

export default useFirebse;