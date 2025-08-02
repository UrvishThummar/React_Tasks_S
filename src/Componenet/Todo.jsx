import { useState, useEffect } from "react";

function Todo() {

  const data=JSON.parse(localStorage.getItem('user'))||[]
  const [input, setinput] = useState({
    name: "",
    username: ''
  })

  const [list, setlist] = useState(data)
  const [edit, setedit] = useState(null)

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(list))
  },[list])

  function handelSubmit(e) {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  function handelAdd(i) {
    if (edit !== null) {
      let update = [...list]
      update[edit] = input
      setlist(update)
      setedit(null)
    } else {
      setlist([...list, input])

    }

    setinput({
      name: '',
      username: ''
    })

  }
  function handelDelete(i) {
    let update = [...list]
    update.splice(i, 1)
    setlist(update)
  }

  function handelEdit(i) {
    setinput(list[i])
    setedit(i)
  }

  return (
    <div style={{margin:'10px 10px'}}>
      <input type="text" name="name" value={input.name} id="" placeholder=" Enter Name" onChange={handelSubmit} /><br /><br />
      <input type="text" name="username" value={input.username} id="" placeholder="Enter username" onChange={handelSubmit} /><br /><br />
      <button onClick={handelAdd}>Add</button><br />
      <hr />

      <ol>
        {
          list.map((u, i) => (
            <li key={i}><b>Name is:</b>{u.name} <br />
              <b>username is:</b>{u.username}
              <button onClick={() => handelDelete(i)} style={{margin:'10px 10px'}}>Delete</button>
              <button onClick={() => handelEdit(i)}  style={{margin:'10px 10px'}}>Edit</button>
              <hr /></li>
          ))
        }
      </ol>
    </div>
  )


}
export default Todo;