import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Capi() {
  const [text, setText] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [product, setProduct] = useState([]);
  const [edit, setEditId] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const info = await axios.get("http://localhost:3000/products");
    setProduct(info.data);
  };

  function AddText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit) {
      // ✅ Update existing product
      await axios.put(`http://localhost:3000/products/${edit}`, text);
      setEditId(null);
    } else {
      // ✅ Create new product
      await axios.post("http://localhost:3000/products", text);
    }

    setText({
      id: "",
      name: "",
      price: "",
    });

    fetchApi();
  };

  const handleDelete = async (id) => {
    // ✅ Delete product
    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchApi();
  };

  const handleEdit = (item) => {
    setText(item);
    setEditId(item.id);
  };

  return (
    <div>
      <h1>API CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter id"
          name="id"
          value={text.id}
          onChange={AddText}
        />
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={text.name}
          onChange={AddText}
        />
        <input
          type="text" 
          placeholder="Enter price"
          name="price"
          value={text.price}
          onChange={AddText}
        />
        <input type="submit" value={edit ? "Update" : "Add"} />
      </form>

      <ul>
        {product.map((el) => (
          <li key={el.id}>
            {el.name} - ₹{el.price}{" "}
            <button onClick={() => handleEdit(el)}>Edit</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
