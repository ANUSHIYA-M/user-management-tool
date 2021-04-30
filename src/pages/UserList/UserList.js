import React from "react";
import ListPageHeader from "./UserListHeader";
import RenderUserList from "./RenderUserList";
import { UserModal } from "components";
import {
  ManageUserData as renderModalContent,
  RenderHeader as renderModalHeader
} from "./ManageUserData";
import { getAllUsers, deleteUser, getUserById } from "utils";
import { UserListContext } from "./context";
import "./styles.scss";

const UserListPage = () => {
  const [userList, setUserList] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    getAllUsers(updateUserList);
  }, []);

  const updateUserList = (data) => {
    setUserList(data);
  };

  const onAddUserClick = () => {
    resetUserModal();
    toggleUserModal();
  };

  const resetUserModal = () => {
    setUserData({});
  };

  const toggleUserModal = () => {
    setShowModal(!showModal);
  };

  const updateUserData = (data) => {
    setUserData(data);
  };

  const onEditOrDeleteUserClick = (event) => {
    event.preventDefault();
    const currEle = event && event.currentTarget;
    const userId = currEle && currEle.getAttribute("user-id");
    const elemId = currEle.getAttribute("id");
    if (elemId == "deleteUserBtn") {
      deleteUser(userId, onDeleteSuccessCbk);
    } else {
      resetUserModal();
      getUserById(userId, updateUserData);
      toggleUserModal();
    }
  };

  const onDeleteSuccessCbk = () => {
    alert("User Deleted Successfully");
    getAllUsers(updateUserList);
  };

  const contextProps = {
    userList,
    userData,
    onAddUserClick,
    onEditOrDeleteUserClick,
    toggleUserModal,
    renderModalHeader,
    renderModalContent
  };

  return (
    <React.Fragment>
      <UserListContext.Provider value={contextProps}>
        <div className="list-page-container">
          <ListPageHeader />
          <RenderUserList />
        </div>
        {showModal === true && <UserModal />}
      </UserListContext.Provider>
    </React.Fragment>
  );
};

export default UserListPage;
