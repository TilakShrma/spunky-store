import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from '../../config/firebase';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
// Prompt user to select google account for sign in
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase
