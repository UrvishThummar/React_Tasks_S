import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HomeDetail() {
  const [state, setState] = useState({});
  const { id, category } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/${category}/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.error("Error fetching:", err));
  }, [id, category]);


  if (!state || !state.name) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h3>{state.name}</h3>
      <img src={state.image} alt={state.name} width={200} />
      <li>₹{state.price}</li>
      <li>{state.category}</li>
    </div>
  );
}
