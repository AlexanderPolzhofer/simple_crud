import React from "react";

export interface UserType {
  id: number;
  name: string;
  username: string;
}

interface AddUserFormProps {
  addUser: (user: UserType) => void;
}

export const initialState = { id: 0, name: "", username: "" };

export const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [user, setUser] = React.useState<UserType>(initialState);
  const isDisabled = !user.name || !user.username;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(), addUser(user), setUser(initialState);
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
      <button disabled={isDisabled}>Add</button>
    </form>
  );
};
