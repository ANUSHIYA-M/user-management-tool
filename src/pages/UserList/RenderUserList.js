import React from "react";
import RenderUserAction from "./RenderUserActions";
import { UserListContext } from "./context";

const RenderUserDetails = () => {
  const { userList } = React.useContext(UserListContext);

  return (
    <React.Fragment>
      {userList &&
        userList.length > 0 &&
        userList.map((data, index) => {
          const { id, username, email, phone, website, company } = data || {};

          return (
            <tr className="user-data" key={`user-id-${id}`}>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
              <td>{company.name}</td>
              <td>
                <RenderUserAction id={id} />
              </td>
            </tr>
          );
        })}
    </React.Fragment>
  );
};

const RenderTableHead = () => (
  <thead id="user-list-tbl-head">
    <tr className="user-data">
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>WebSite</th>
      <th>Company Name</th>
      <th className="hide">Action</th>
    </tr>
  </thead>
);

const RenderUserList = () => (
  <div className="user-list-container">
    <table id="user-list-table">
      <RenderTableHead />
      <tbody id="user-list-tbl-body">
        <RenderUserDetails />
      </tbody>
    </table>
  </div>
);

export default RenderUserList;
