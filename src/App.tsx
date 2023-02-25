import React from "react";
import "./App.css";
import { AddUserForm } from "./components/AddUserForm/AddUserForm";
import { UserTable } from "./components/UserTable/UserTable";

function App() {
  const [userData, setUserData] = React.useState([
    {
      id: "0",
      username: "lex92",
      name: "Alex",
    },
  ]);

  return (
    <div className="app-container">
      <div className="heading">
        <img src="/public/react.svg" alt="react-logo" />
        <h1>Simple CRUD app </h1>
      </div>
      <div>
        <div>
          <h2>Add User</h2>
          <AddUserForm />
        </div>
        <div>
          <h2>View Users</h2>
          <UserTable users={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
