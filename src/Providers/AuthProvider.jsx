import { createContext, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // create a new user through firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update a user profile
    const updateUser = (name, photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // get user and user info
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, { email: currentUser.email })
                    .then((data) => {
                        localStorage.setItem('secret-token', data.data.token);
                        setUser(currentUser);
                        setLoading(false); // Set loading to false after setting the user and receiving the token
                    })
                    .catch((error) => {
                        // Handle error if there's an issue with the API request
                        console.error(error);
                        setLoading(false); // Set loading to false even if there's an error
                    });
            } else {
                localStorage.removeItem('secret-token');
                setUser(null);
                setLoading(false); // Set loading to false when there is no current user
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);



    // logOut function
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {
        loading,
        user,
        createUser,
        login,
        googleSignIn,
        updateUser,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;