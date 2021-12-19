import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';



// firebase arrow function call
initializeAuthentication()




const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [auth])

    // google login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // create email
    const createAccountWithGoogle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email login
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    const updateName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                const newUser = { ...user, displayName: name }
                setUser(newUser)
            }).catch((error) => {

            });
    }

    // logout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    // make admin
    const handleUserInfoRegister = (email) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
        .then((res) => res.json())
        .then((result) => {});
    };

    
    return {
        user,
        setUser,
        signInWithGoogle,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        isLoading,
        setIsLoading,
        logOut,
        updateName,
        handleUserInfoRegister
    }
};





export default useFirebase;