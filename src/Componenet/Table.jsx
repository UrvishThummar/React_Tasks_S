import React, { useState, useEffect } from 'react';


function Table() {
    const [users, setusers] = useState([]);



    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setusers(data.users);
                //   console.log("object");
            })
            .catch(error => console.error('Error:', error));
    }, [])

    return (
        <div>
            <ul >
                {users.map((users) => (
                    <li key={users.id}>
                        <h3>{users.firstName}</h3>
                        <img src={users.image} alt={users.email} width="100" />
                        <p>{users.gender}</p>
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default Table;