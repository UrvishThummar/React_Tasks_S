import React, { useState, useEffect } from 'react';


function Card() {
     const[state,setState]=useState("suman")
    const [products, setProducts] = useState([]); 

    

     useEffect(()=>{
              fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
                console.log("mount");
            })
            .catch(error => console.error('Error:', error));

            return(()=>{
                alert("update")
            })
     },[])

    return (
        <div>
            <ul >
                {products.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>  
                        <img src={item.image} alt={item.title} width="100" />
                        <p>${item.price}</p>
                    </li>
                ))}
            </ul>

        </div>
       
    )
}

export default Card;