import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myAction } from "./Elec/Action";
import { useDispatch } from "react-redux";

export default function HomeDetail() {
  const [state, setState] = useState({});
  const { id, category } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/${category}/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.error("Error fetching:", err));
  }, [id, category]);


  if (!state || !state.name) {
    return <h2>Loading...</h2>;
  }

  function AddToCart(){
    console.log("Adding to cart:", state);
    dispatch(myAction(state));
    console.log("Item dispatched to Redux");
    navigate('/cart');
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <h3>{state.name}</h3>
      <img src={state.image} alt={state.name} width={200} />
      <li>₹{state.price}</li>
      <li>{state.category}</li>

      <button onClick={AddToCart}>Add to Cart</button>
    </div>
  );
}
