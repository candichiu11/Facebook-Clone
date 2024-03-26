import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzafvhIMFfEi_8ixrGawn52XOP7Pl5A3U",
    authDomain: "facebook-clone-78902.firebaseapp.com",
    projectId: "facebook-clone-78902",
    storageBucket: "facebook-clone-78902.appspot.com",
    messagingSenderId: "950730094603",
    appId: "1:950730094603:web:79ef9477b095cce9ffaf0e",
    measurementId: "G-T8GDRJDT18"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
