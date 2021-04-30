import React from "react";
import ReactDOM from "react-dom";
import { UserListContext } from "pages/UserList/context";
import "./styles.scss";

const RenderModalSections = () => {
  const {
    renderModalHeader = () => <></>,
    renderModalContent = () => <></>,
    renderModalFooter = () => <></>
  } = React.useContext(UserListContext);

  return (
    <section className="section-wrapper">
      <section className="section-header">{renderModalHeader()}</section>
      <section className="section-content">{renderModalContent()}</section>
      <section className="section-footer">{renderModalFooter()}</section>
    </section>
  );
};

const UserModal = () => {
  const { toggleUserModal } = React.useContext(UserListContext);

  const ModalTemplate = () => {
    return (
      <React.Fragment>
        <RenderModalSections />
        <div className="modal-mask" onClick={toggleUserModal} />
      </React.Fragment>
    );
  };

  return ReactDOM.createPortal(
    <ModalTemplate />,
    document.getElementById("root")
  );
};

export { UserModal };
export default UserModal;
