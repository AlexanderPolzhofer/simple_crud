import React from "react";
import { UserType, initialState } from "../AddUserForm/AddUserForm";

interface EditUserFormProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: (user: UserType) => void;
  users: UserType[];
  currentUserID: number;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({
  setIsEditing,
  editUser,
  users,
  currentUserID,
}) => {
  const [user, setUser] = React.useState<UserType>(
    users[currentUserID] ?? initialState
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(),
      editUser(user),
      setUser(initialState),
      setIsEditing(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Edit User</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};
