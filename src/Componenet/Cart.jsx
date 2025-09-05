import { useSelector } from "react-redux";

export default function Cart(){
  const cartItems = useSelector((state) => state);
  
  console.log("Cart component - Redux state:", cartItems);

    return(
        <>
        <h1>Shopping Cart</h1>
       
       {
         cartItems.map((el, i) => (
            <div key={i}>
                <img src={el.image} alt={el.name} style={{'width':200}} />
                <h3>{el.name}</h3>
                <p>₹{el.price}</p>
                <p>Quantity: {el.quantity || 1}</p>
            </div>
          ))
       }
         
        
        </>
    )
}