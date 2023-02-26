import React from "react";

interface UserTableProps {
  users: { [key: string]: string }[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th style={{ width: " 134px" }}>Name</th>
        <th style={{ width: " 134px" }}>Username</th>
        <th style={{ width: " 200px" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 1 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <p>No Users!</p>
      )}
    </tbody>
  </table>
);
