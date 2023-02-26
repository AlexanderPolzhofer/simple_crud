import React from "react";
import { AddUserForm, UserType } from "./components/AddUserForm/AddUserForm";
import { EditUserForm } from "./components/EditUserForm/EditUserForm";
import { UserTable } from "./components/UserTable/UserTable";
import "./App.css";

const App = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentUserID, setCurrentUserID] = React.useState<number>(0);

  const addUser = (user: UserType) => {
    user.id = users.length;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((filteredUser) => filteredUser.id !== id));
  };

  const editUser = (user: UserType) => {
    setUsers(
      users.map((filterUser) => (filterUser.id === user.id ? user : filterUser))
    );
  };

  const currentUser = (user: UserType) => {
    setCurrentUserID(user.id);
  };

  return (
    <div className="app-container">
      <div className="heading">
        <img src="/public/react.svg" alt="react-logo" />
        <h1>Simple CRUD app </h1>
      </div>
      <div>
        {isEditing ? (
          <div>
            <h2>Edit User</h2>
            <EditUserForm
              setIsEditing={setIsEditing}
              editUser={editUser}
              users={users}
              currentUserID={currentUserID}
            />
          </div>
        ) : (
          <div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
        <div>
          <h2>View Users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setIsEditing={setIsEditing}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
