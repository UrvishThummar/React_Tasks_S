import { useState } from "react";


function Demo() {
    const [text, settext] = useState({
        name: '',
        email: ''
    })

    const [list, setlist] = useState([])
    const[edit,setedit]=useState(null)

    function handelchange(e) {
        settext({ ...text, [e.target.name]: e.target.value })
    }

    function handeladd(index) {
        if(edit!==null){
            const updateList=[...list]
            updateList[edit]=text
            setlist(updateList)
            setedit(null)
        }else{
        setlist([...list, text])

        }

        settext({name:'',email:''})
    }

    function handeldelete(index){
        const updateList=[...list]
        updateList.splice(index,1)
        setlist(updateList)
    }

    function handelEdit(index){
        settext(list[index])
        setedit(index)
    }

    
    return (
        <div>
            Name: <input type="text" name="name" value={text.name} id=""  placeholder="Enter name" onChange={handelchange} /><br /><br />
            E-mail: <input type="text" name="email" value={text.email} id=""  placeholder="Enter Email" onChange={handelchange} /><br/><br />
            <button onClick={handeladd} style={{marginTop:"20px"}}>Add</button>

            <ul>
                {list.map((u, index) => (
                    <li key={index}>Name:{u.name} <br />
                        Email:{u.email}
                        <hr />

                        <button onClick={()=>handelEdit(index)}>Edit</button>
                        <button onClick={()=>handeldelete(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Demo;