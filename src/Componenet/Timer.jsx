import { useState, useEffect, useRef } from "react";


function Timer(){
    const[state,setstate]=useState(0)
   var id=useRef(0);

    

    function handleStart(){
      id.current=setInterval(() => {
        setstate((prev)=>prev+1)
        console.log(id.current);
      }, 1000);
    }
    function handlePause(){
      clearInterval(id.current)
    }
    function handelreset(){
      setstate(0)
    }

    return(
        <div style={{marginLeft:'50px'}}>
            <h1 style={{marginLeft:'50px'}}>{state}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handelreset}>reset</button>
           
        </div>
    )
}
export default Timer;
