import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Elec() {
  const [state, setState] = useState([]);

  useEffect(() => {
  fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div>
      <h1>Electronics Products</h1>
      {state.map((el) => (
        <div key={el.id}>
          <Link to={`/ProductDetail/${el.id}`}>{el.title}</Link>
          <br />
          {/* <img src={el.image} alt={el.title} width={100} /> */}
      <img src={el.image} alt={el.title} width={200} />

          <li>${el.price}</li>
        </div>
      ))}
</div>
);
}
