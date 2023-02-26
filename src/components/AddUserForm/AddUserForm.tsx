import React from "react";

interface AddUserFormProps {
  userData: { [key: string]: string }[];
}

export const AddUserForm: React.FC<AddUserFormProps> = ({ userData }) => (
  <form>
    <label>Name</label>
    <input type="text" name="name" onChange={(e) => e.target.value} />
    <label>Username</label>
    <input type="text" name="username" />
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      Add
    </button>
  </form>
);
