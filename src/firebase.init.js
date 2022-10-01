import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAzkrZhOVRllv1zc6ngmUg6SZeEPX5YiG8",
    authDomain: "simple2-firebase-auth.firebaseapp.com",
    projectId: "simple2-firebase-auth",
    storageBucket: "simple2-firebase-auth.appspot.com",
    messagingSenderId: "502057816998",
    appId: "1:502057816998:web:eeebb228a5a5c86bc37567"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
