import { useRef } from "react";

function TodoREF() {
    const name = useRef(null);
    const email = useRef(null);
    const resultRef = useRef(null);

    function handelSubmit(e) {
        e.preventDefault();
        const nameVal = name.current.value;
        const emailVal = email.current.value;

        resultRef.current.innerHTML = `
      <p><strong>Name:</strong> ${nameVal}</p>
      <p><strong>Email:</strong> ${emailVal}</p>
    `;

    name.current.value = "";
    email.current.value = "";

    name.current.focus();
    }

    return (
        <div>
            <h1>Todo</h1>
            <input type="text" placeholder="Name" ref={name} />
            <input type="text" placeholder="Email" ref={email} />
            <button onClick={handelSubmit}>Add</button>

            <div ref={resultRef}></div>
        </div>
    );
}

export default TodoREF;
