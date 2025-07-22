import { useState,useEffect } from "react";

function Todo() {
  const [data, setdata] = useState({ name: '', email: '' })
  const [list, setlist] = useState([])
  const [edit, setedit] = useState(null)
  
  function handelchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  function handelsubmit(index) {
    
      const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim()
    };

    if (trimmedData.name === "" || trimmedData.email === "") {
      alert("Name and Email cannot be empty.");
      return;
     
    }
    if (edit !== null) {
      const updateList = [...list]
      updateList[edit] = data;
      setlist(updateList)
      setedit(null)
    } else {
      setlist([...list, data]);
    }
    setdata({ name: '', email: '' })
  }

  function handelEdit(index) {
    setdata(list[index])
    setedit(index)
  }

  function handeldelete(index) {
    const updateList = [...list]
    updateList.splice(index, 1)
    setlist(updateList)
  }
  return (
    <div>
      <input type="text" name="name" value={data.name} id="" placeholder="Enter Name" onChange={handelchange}  />
      <input type="email" name="email" value={data.email} id="" placeholder="Enter email" onChange={handelchange} />
      <button onClick={handelsubmit}>Add</button>

      <ul>
        {list.map((li, index) => (
          <li key={index}>{li.name}-{li.email}
            <button onClick={() => handelEdit(index)}>Edit</button>
            <button onClick={() => handeldelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Todo;