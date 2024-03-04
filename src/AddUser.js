import React, { useState } from 'react';

export default function AddUser({ addUser }) {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    telephone: "",
    gender: "",
    id: "",
    username: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <h2>Add New User</h2>
      <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} />
      <br/>
      <input type="number" name="age" placeholder="Age" value={newUser.age} onChange={handleInputChange} />
      <br/>
      <input type="number" name="telephone" placeholder="Telephone" value={newUser.telephone} onChange={handleInputChange} />
      <br/>
      <input type="text" name="gender" placeholder="Gender" value={newUser.gender} onChange={handleInputChange} />
      <br/>
      <input type="number" name="id" placeholder="ID" value={newUser.id} onChange={handleInputChange} />
      <br/>
      <input type="text" name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange} />
      <br/>
      <button onClick={() => addUser(newUser)}>Add User</button>
    </div>
  );
}