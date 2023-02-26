import React from "react";
import "./App.css";
import { AddUserForm, UserType } from "./components/AddUserForm/AddUserForm";
import { UserTable } from "./components/UserTable/UserTable";

const App = () => {
  const [users, setUsers] = React.useState<UserType[]>([
    { id: 0, name: "Alex", username: "lex92" },
  ]);

  const addUser = (user: UserType) => {
    user.id = users.length;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((filteredUser) => filteredUser.id !== id));
  };

  React.useEffect(() => {}, [users]);

  return (
    <div className="app-container">
      <div className="heading">
        <img src="/public/react.svg" alt="react-logo" />
        <h1>Simple CRUD app </h1>
      </div>
      <div>
        <div>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div>
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
