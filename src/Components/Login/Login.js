import React, { useContext } from 'react'; 
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const app = initializeApp(firebaseConfig);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleSignIn = () => { 
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signInUser = {name: displayName, email}
                setLoggedInUser(signInUser) 
                history.replace(from)
            }).catch((error) => { 
                const errorCode = error.code;
                const errorMessage = error.message; 
                const email = error.email; 
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    return (
        <div>
            <h1>This is login {loggedInUser.name}</h1>
            <button onClick={handleGoogleSignIn}>GoogleSignIn</button>
        </div>
    );
};

export default Login;