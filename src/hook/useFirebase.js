import { useEffect, useState } from "react"
import initFirbaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initFirbaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside');
                setUser(user)
            }
        })
    }, [])

    return { user, error, signInUsingGoogle, logOut }
}

export default useFirebase;