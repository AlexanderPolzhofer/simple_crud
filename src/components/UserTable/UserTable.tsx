import React from "react";
import { UserType } from "../AddUserForm/AddUserForm";

interface UserTableProps {
  users: UserType[];
  deleteUser: (id: number) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: (user: UserType) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  deleteUser,
  setIsEditing,
  currentUser,
}) => {
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
                <button
                  onClick={() => {
                    setIsEditing(true);
                    currentUser(user);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                    setIsEditing(false);
                  }}
                >
                  Delete
                </button>
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
