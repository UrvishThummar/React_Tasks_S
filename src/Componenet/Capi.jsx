import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Capi() {
  const [text, setText] = useState({
    id: "",
    name: "",
    price: ""
  });
  const [product, setProduct] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const info = await axios.get("http://localhost:3000/data");
    setProduct(info.data);
  };

  function AddText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit != null) {
      await axios.put(`http://localhost:3000/data/${edit}`, text);
      setEdit(null);
    } else {
      await axios.post("http://localhost:3000/data", text);
    }
    setText({ id: "", name: "", price: "" });
    fetchApi();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/data/${id}`);
    fetchApi();
  };

  const handleEdit = async (item) => {
    setText({ id: item.id, name: item.name, price: item.price });
    setEdit(item.id);
  };


  const filteredProducts = product.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
      
    }
    return 0;
  });

  return (
    <div>
      <h1>Api</h1>


      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Low → High</option>
        <option value="highToLow">High → Low</option>
      </select>
      <br /><br />


      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter id"
          name="id"
          value={text.id}
          onChange={AddText}
        />
        <input
          type="text"
          placeholder="enter Product name"
          name="name"
          value={text.name}
          onChange={AddText}
        />
        <input
          type="number"
          placeholder="enter price"
          name="price"
          value={text.price}
          onChange={AddText}
        />
        <input type="submit" />
      </form>


      {sortedProducts.map((el, i) => (
        <div key={i}>
          <p>{el.id}</p>
          <p>{el.name}</p>
          <p>{el.price}</p>
          <button onClick={() => handleEdit(el)}>edit</button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
