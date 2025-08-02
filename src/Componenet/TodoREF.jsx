import { useRef, useState } from "react";

function TodoREF() {
    const nameref = useRef(null)
    const emailref = useRef(null)
    const result = useRef(null)

    const [item, setitem] = useState([])
    const [edit, setedit] = useState(null)

    function Add() {
        const name = nameref.current.value
        const email = emailref.current.value

        if (edit !== null) {
            const update = [...item]
            update[edit] = { name, email }
            setitem(update);
            setedit(null);
        } else {
            setitem([...item, { name, email }])

        }


        nameref.current.value = ''
        emailref.current.value = ''
    }

    function handleDelete(i) {
        const update = ([...item])
        update.splice(i, 1)
        setitem(update)
    }

    function handleEdit(i) {
        const items = item[i];
        nameref.current.value = items.name;
        emailref.current.value = items.email;
        setedit(i);

    }
    return (
        <div>
            <input type="text" placeholder="Enter name" ref={nameref} />
            <input type="text" placeholder="Enter email" ref={emailref} />
            <button onClick={Add}>Add</button>
            <div ref={result}>
                {item.map((item, i) => (
                    <div key={i}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TodoREF;
