import React from "react";
import { UserListContext } from "./context";

const RenderUserAction = (props) => {
  const { id } = props;
  const { onEditOrDeleteUserClick } = React.useContext(UserListContext);

  return (
    <div className="user-action-cont">
      <button
        id="editUserBtn"
        onClick={onEditOrDeleteUserClick}
        className="edit-user-btn"
        user-id={id}
      >
        Edit
      </button>
      <button
        id="deleteUserBtn"
        onClick={onEditOrDeleteUserClick}
        className="delete-user-btn"
        user-id={id}
      >
        Delete
      </button>
    </div>
  );
};

export default RenderUserAction;
