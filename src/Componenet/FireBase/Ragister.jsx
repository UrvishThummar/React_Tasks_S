import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


export default function Ragister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function ragister() {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert('Sucess ')

        }).catch((error) => {
            console.log(error);
        })
    }

    function signupWithGoogle() {
        signInWithPopup(auth, googleProvider)
    }


    return (
        <div>
            <h1>Ragister</h1>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="" id="" placeholder="Email" />
            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="" id="" placeholder="PAssword" />
            <button onClick={ragister}>Click</button><br />
                
            <button onClick={signupWithGoogle}>Sign in with google</button>

        </div>
    )
}