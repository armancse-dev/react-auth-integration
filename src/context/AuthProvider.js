import React, { createContext } from 'react';
import useFirebse from '../hooks/useFirebase';

const AuthContext = createContext();


const AuthProvider = ({children}) => {
   // const {children} = props;
   const allContext = useFirebse();
   return (
      <AuthContext.Provider value={allContext}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;