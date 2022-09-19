import {initializeApp} from "firebase/app"
import{getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCvs6Zr1WZeR9qNrSXyKD5qg8J0u7Gcw34",
  authDomain: "detail-blog-react-app-firebase.firebaseapp.com",
  projectId: "detail-blog-react-app-firebase",
  storageBucket: "detail-blog-react-app-firebase.appspot.com",
  messagingSenderId: "901815363782",
  appId: "1:901815363782:web:e43ec4b7a72f1ce9858fc7",
};

initializeApp(firebaseConfig)

const db=getFirestore()

export {db}