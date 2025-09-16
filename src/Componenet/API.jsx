import { useState, useEffect } from "react";    
import { Link } from "react-router-dom";

function API() {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data.products);
                setProducts(data.products);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div >
            <ul >
                {products.map((item) => (
                    <li key={item.id}>
                        <img src={item.images} alt={item.title} width="100" />
                        <p>${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default API;