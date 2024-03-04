import React, { useState } from 'react';
import Database from './Database';
import UsersList from './UsersList';
import AddUser from './AddUser';
import "./App.css";

export default function App() {
  const [users, setUsers] = useState(Database);

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className='mainContainer'>
      <h1>Students List</h1>
      <UsersList users={users} removeUser={removeUser} />
      <AddUser addUser={addUser} />
    </div>
  );
}