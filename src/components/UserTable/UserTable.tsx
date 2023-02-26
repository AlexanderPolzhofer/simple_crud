import React from "react";
import { UserType } from "../AddUserForm/AddUserForm";

interface UserTableProps {
  users: UserType[];
  deleteUser: (id: number) => void;
}

export const UserTable: React.FC<UserTableProps> = ({ users, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: " 134px" }}>Name</th>
          <th style={{ width: " 134px" }}>Username</th>
          <th style={{ width: " 200px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
