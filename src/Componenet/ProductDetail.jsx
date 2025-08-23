import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [state, setState] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // if (!state || !state.title) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <div>
      <h1>Product Detail</h1>
      <h3>{state.title}</h3>
      <img src={state.image} alt={state.title} width={200} />
      <li>${state.price}</li>
 </div>
);
}
