
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";
import { useState } from "react";

const auth = getAuth(app);
export default function SingInF() {
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

   function Login(){
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        alert('Successfully Loginn 💕💕💕')
    }).then((error)=>{
        console.log(error);
    
    })
   }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="" id="" placeholder="Email" />
            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="" id="" placeholder="PAssword" />
            <button onClick={Login}>Click</button>
        </div>
    )
}