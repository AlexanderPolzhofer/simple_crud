import React from "react";

interface AddUserFormProps {}

export const AddUserForm: React.FC<AddUserFormProps> = () => (
  <form>
    <label>Name</label>
    <input type="text" name="name" value="" />
    <label>Username</label>
    <input type="text" name="username" value="" />
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
