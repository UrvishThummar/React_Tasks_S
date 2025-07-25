import React, { useEffect, useRef, useState } from 'react'

export default function Speed() {
    const [text, setText] = useState('');
    const [wpm, setwpm] = useState(0);
    const [second, setSecond] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const timer = useRef(null)



    function handlechange(e) {
        setText(e.target.value);
        if (!timer.current) {
            timer.current = setInterval(() => {
                setSecond(s => s + 1)
            }, 1000)
        }
    };
    const handleSubmit = () => {
        clearInterval(timer.current)
        timer.current = null;
        setShowResult(true)


        setTimeout(() => {
            setShowResult(false)
            setText('')
        }, 5000);


    }
    useEffect(() => {
        const words = text.trim().split().length;
        if (second > 0) {
            setwpm(Math.round((words / second) * 60))
        }
    })
    const char = text.length;

    return (
        <div>
            <textarea value={text} onChange={handlechange} placeholder='Enter A text'></textarea><br />
            <button onClick={handleSubmit} type='submit'>Submit</button><br />
            {showResult && (
                <>
                    <p>WPM: {wpm}</p>
                    <p>Characters: {char}</p>
                    <p>Time: {second} seconds</p>
                </>
            )}
        </div>
    )
}
