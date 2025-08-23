import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function HomeCat() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchApi();
  }, [category]);

  const fetchApi = async () => {
    const info = await axios.get(`http://localhost:3000/${category}`);
    setProducts(info.data);
  };


  return (
    <div>
      <h1>{category.toUpperCase()} Category</h1>
      {products.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
          <img src={item.image} alt=""  style={{width: "100px"}}/>
          <Link to={`/${category}/${item.id}`}>View Detail</Link>
        </div>
      ))}
    </div>
  );
}
