import firebase from 'firebase';

import 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSX7k5l9yH9Oawfha9qYS8qF60BSk4lbw",
  authDomain: "talk-io-d7ac4.firebaseapp.com",
  projectId: "talk-io-d7ac4",
  storageBucket: "talk-io-d7ac4.appspot.com",
  messagingSenderId: "232187124454",
  appId: "1:232187124454:web:fc3c2950dace9cbc3af927"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth=app.auth();
export {auth}