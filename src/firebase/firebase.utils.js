import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnKW-WfLqanBvwoo3q915DFBd3KXJ2DJg",
    authDomain: "crwn-db-8ec20.firebaseapp.com",
    databaseURL: "https://crwn-db-8ec20.firebaseio.com",
    projectId: "crwn-db-8ec20",
    storageBucket: "crwn-db-8ec20.appspot.com",
    messagingSenderId: "516593845330",
    appId: "1:516593845330:web:8a601b63e9c2ebf506cb8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;