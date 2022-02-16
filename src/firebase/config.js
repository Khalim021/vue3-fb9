import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCR9jdUzxr5kaL192OXrLK55OfaLL8E5bM",
    authDomain: "vue-fb9-4fa42.firebaseapp.com",
    projectId: "vue-fb9-4fa42",
    storageBucket: "vue-fb9-4fa42.appspot.com",
    messagingSenderId: "415449018409",
    appId: "1:415449018409:web:7c15db6076fc2848336c38"
  };

// init firebase
initializeApp(firebaseConfig)
// init services
const db = getFirestore()
const auth = getAuth()
export { db, auth }


