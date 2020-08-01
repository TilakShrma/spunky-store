import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from '../../config/firebase';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
// Prompt user to select google account for sign in
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export const createUserProfile = async (userAuth, options={}) => {
    if(!userAuth) return;

    // get document reference for user
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get snapshot reference
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {email, displayName} = userAuth;
        const creationDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                creationDate,
                ...options
            })
        } catch (err) {
            console.log('Error creating user..', err.message);
        }
    }

    return userRef;
}

export default firebase
