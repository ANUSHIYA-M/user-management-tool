import React from "react";
import { UserListContext } from "./context";

const AddCustomerBtn = () => {
  const { onAddUserClick } = React.useContext(UserListContext);

  return (
    <button
      type="button"
      className="action-button"
      id="addUserBtn"
      onClick={onAddUserClick}
    >
      Add User
    </button>
  );
};

const ListPageHeader = () => {
  return (
    <div className="user-list-header-container">
      <div className="user-list-header">
        <div className="user-list-title">
          <h1>User List</h1>
        </div>
        <div className="add-user-section">
          <AddCustomerBtn />
        </div>
      </div>
    </div>
  );
};

export default ListPageHeader;
