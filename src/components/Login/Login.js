import React from 'react';
import { Link } from 'react-router-dom';
import useFirebse from '../../hooks/useFirebase';
const Login = () => {
   const {signInUsingGoogle} = useFirebse();
   return (
      <div>
         <h2>Please Login</h2>
         <button onClick={signInUsingGoogle} >Google Sign In</button><br/>
         <Link to="/register">New User?</Link>
      </div>
   );
};

export default Login;