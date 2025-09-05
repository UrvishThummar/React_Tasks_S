import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeP() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ marginBottom: "20px" }}>
       
      </div>
      {state.map((el) => (
        <div key={el.id} style={{ marginBottom: "20px" }}>
          <Link to={`/${el.category}`}>{el.name}</Link>
          <br />
          <img src={el.image} alt={el.name} width={200} />
          <li>₹{el.price}</li>
          <li>{el.category}</li>
        </div>
      ))}
    </div>
  );
}
