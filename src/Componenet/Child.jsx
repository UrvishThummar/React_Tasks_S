import React, { useCallback, useMemo, useState } from "react";

// const Child = React.memo(({ onClick }) => {
//     console.log('Child render');
//     return <button onClick={onClick}>Update</button>
// })

function expensiveCal(num){
    console.log('cal');
    for(var i=1;i<10000;i++){}
    return num*2
}

export default function Par() {
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)
    const double=useMemo(()=>expensiveCal(count),[count])

    // const Inc = useCallback(()=>{
    //     setCount((prev)=>prev+1)
    // },[])

    return (
        <div>
            <p>Count is {count}</p>
            <p>Double is {double}</p>
            <button onClick={(() => { setOther(other + 1) })}>click</button>
            <button onClick={(() => { setCount(count + 1) })}>click</button>
        </div>
    )
}