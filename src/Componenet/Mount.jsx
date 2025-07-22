import { useState, useEffect } from "react";

function Mount() {
    const [state, setstate] = useState('https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA')

    useEffect(()=>{
        console.log("mount Phase");

        return()=>{
            alert("unmount")
        }
    })

    return(
        <div>
            <img src={state} alt="" />
            <button onClick={()=>{setstate('https://imgs.search.brave.com/KjOiDrAycYvjeLUzUAzn6JYXohTCMJe4MkAsTIa9YQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vZnJvbnQv/aW1nL2xhbmRpbmdz/L2hvbWVwYWdlLzk4/NzQ2MTQzLmpwZw')}}>Update</button>
        </div>
    )
}

export default Mount