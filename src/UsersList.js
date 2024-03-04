import React from 'react';

export default function UserList({ users, removeUser }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Age: {user.age}, Telephone: {user.telephone}, Gender: {user.gender}, Id: {user.id}, Username: {user.username}
            <button onClick={() => removeUser(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}