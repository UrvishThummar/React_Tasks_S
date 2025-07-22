import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    Position: '',
    image: null
  });
  const [users, setUsers] = useState([]);
  const[edit,setedit]=useState(null)
    
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setInput((prev) => ({
        ...prev,
        image: imageURL,
      }));
    }
  }

  function handleSubmit() {
    const trimmedData = {
      name: input.name.trim(),
      email: input.email.trim(),
      Position: input.Position.trim(),
      image: input.image,
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.Position || !trimmedData.image) {
      alert('Please fill all fields!');
      return;
    }

    if(edit!==null){
      const updatedList=[...users]
      updatedList[edit]=input;
      setUsers(updatedList);
      setedit(null)
    }else{
       setUsers([...users, trimmedData]);
    }

   
    setInput({ name: '', email: '', Position: '', image: null });
    handleClose();
  }

  function handleDelete(index) {
    const updatedList = [...users];
    updatedList.splice(index, 1);
    setUsers(updatedList);
  }

  function handelEdit(index){
    setInput(users[index])
    setedit(index)

    handleShow();
  }
 

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '20px' }}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Position</Form.Label>
              <Form.Select name="Position" value={input.Position} onChange={handleChange}>
                <option value="">Select Position</option>
                <option>Manager</option>
                <option>HR</option>
                <option>Front-end Developer</option>
                <option>Back-end Developer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <ul>
          {users.map((u, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <img
                src={u.image}
                alt="Uploaded preview"
                style={{ height: '50px', width: '50px', borderRadius: '50%' }}
              />
              <h4>Name: {u.name}</h4>
              <p>Email: {u.email}</p>
              <p style={{ marginTop: '-10px' }}>Position: {u.Position}</p>
              <Button variant="secondary" onClick={() => handelEdit(index)}>
                Edit
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Delete
              </Button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Example;
