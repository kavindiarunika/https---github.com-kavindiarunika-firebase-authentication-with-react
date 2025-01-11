import { useState } from 'react'
import { auth, googleprovider } from '../config/firebase-config'
import { createUserWithEmailAndPassword, signInWithPopup ,signOut} from 'firebase/auth'
export const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Signin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Email:", email);
      console.log("Password:", password);
    }
    catch (err) {
      console.error(err);
    }
  };

  const signwithgoogle = async()=>{
    try{
      await signInWithPopup(auth,googleprovider);

    }
    catch(err){
      console.error(err);
    }
  };

  const logout =async()=>{
    try{
       await signOut(auth);
    }
    catch(err){
      console.error(err);

    }

  };
  return (
    <div>
      <input
        onChange={(e) => setemail(e.target.value)}
        placeholder="email..."
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password..."
      />
      <button onClick={Signin}>Sign in</button>
      <button onClick={signwithgoogle}>Sign with google</button>
      <button onClick={logout}>log out</button>
    </div>
  )
}


