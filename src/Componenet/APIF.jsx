import React, { useEffect, useState } from 'react';

function APIF() {
    const [state, setstate] = useState({
        name: '',
        gender: '',
        iamge: ''
    })
    useEffect(() => {
        randomUser();
    }, []);

    function randomUser() {
        fetch('https://randomuser.me/api/').then((res) => {
            return res.json()
        }).then((data) => {
            setstate({
                name: data.results[0].name.first,
                gender: data.results[0].gender,
                image: data.results[0].picture.thumbnail
            })
            // console.log(data);
        })
    }

    return (
        <div>
            <img src={state.image} alt="" />
            <h1>Name: {state.name}</h1>
            <h3>Gender: {state.gender}</h3>

            <button onClick={randomUser}>Show</button>
        </div>
    )
}

export default APIF;