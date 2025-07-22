import React, { useRef } from 'react';

function Color() {
  const pera = useRef(null);

  function handleClick  ()  {
   
      pera.current.style.backgroundColor = 'gray'; 

  };

  return (
    <div>
      <p ref={pera}>This is a paragraph whose color will change.</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default Color;
