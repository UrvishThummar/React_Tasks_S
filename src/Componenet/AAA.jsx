import { useState } from "react";
import { myContext } from "./Context";
import BBB from "./BBB";


export default function AAA(){
    const[state,setstate]=useState({
        name:'Urvish',
        email:'urvish@gmail.com'
    })

    return(
        <div>
            <h1>{state.name}</h1>

            <myContext.Provider value={state}>
                <BBB/>
            </myContext.Provider>
        </div>
    )
}