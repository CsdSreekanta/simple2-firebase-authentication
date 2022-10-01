import app from './firebase.init'
import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

 const handleGoogleSignIn= ()=>{
  signInWithPopup(auth, googleProvider)
  .then((result)=>{
   const user = result.user
   setUser(user)
   console.log(user)
  })
  .catch((error)=>{
    console.log(error)
  })
 }

 const githubSignIn= ()=>{ 
  signInWithPopup(auth, githubProvider)
  .then(result=>{
    const user = result.user
    console.log(user)
  })
  .catch(error=>{
    console.error(error)
  })
 }

 const handleSignOut= ()=>{
  signOut(auth)
  .then(()=>{
    setUser({})
  })
  .catch(error=>{
    console.error(error)
  })
 }
 

  return (
    <div className="App">

     { user.email? <button onClick={handleSignOut} className='bg-red-500 p-3 m-2 rounded-lg text-white font-bold shadow-lg'>Sign Out</button>:

 <>
       <button onClick={handleGoogleSignIn} className='bg-green-500 p-3 m-2 rounded-lg text-white font-bold shadow-lg'>Google Sign In</button>
      <button onClick={githubSignIn} className='bg-blue-500 p-3 m-2 rounded-lg text-white font-bold shadow-lg'>Github Sign In</button>
 </>
    }
     <h1>Your Name: {user.displayName}</h1>
     <h1>Email: {user.email}</h1>


    </div>
  );
}

export default App;
