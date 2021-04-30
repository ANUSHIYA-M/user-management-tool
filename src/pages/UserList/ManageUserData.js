import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserListContext } from "./context";
import { validateFields } from "utils";

const RenderHeader = () => {
  const { toggleUserModal } = React.useContext(UserListContext);

  return (
    <div className="user-modal-header">
      <h1>Add/Edit User</h1>
      <svg className="modal-close-icon" onClick={toggleUserModal}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </div>
  );
};

const ManageUserData = () => {
  const { userData } = React.useContext(UserListContext);

  const {
    username = "",
    email = "",
    phone = "",
    website = "",
    company: { name = "" } = {}
  } = userData || {};

  const defaultValues = {
    userName: username,
    email,
    phone,
    website,
    companyName: name
  };

  const onFormSubmit = (values) => {
    console.log("Form Values ", values);
  };

  return (
    <Formik
      initialValues={defaultValues}
      validate={validateFields}
      onSubmit={onFormSubmit}
    >
      {(formik) => {
        const { errors, resetForm } = formik;
        return (
          <Form className="user-form">
            <div className="field-cont user-name-cont">
              <label htmlFor="userName">User Name</label>
              <Field name="userName" className="user-name-input" />
              <ErrorMessage
                name="userName"
                component={() => (
                  <span className="field-error-msg">{errors.userName}</span>
                )}
              />
            </div>
            <div className="field-cont email-cont">
              <label htmlFor="email">Email</label>
              <Field name="email" className="email-input" />
              <ErrorMessage
                name="email"
                component={() => (
                  <span className="field-error-msg">{errors.email}</span>
                )}
              />
            </div>
            <div className="field-cont phone-cont">
              <label htmlFor="phone">Phone</label>
              <Field name="phone" className="phone-input" />
              <ErrorMessage
                name="phone"
                component={() => (
                  <span className="field-error-msg">{errors.phone}</span>
                )}
              />
            </div>
            <div className="field-cont website-cont">
              <label htmlFor="website">Website</label>
              <Field name="website" className="website-input" />
              <ErrorMessage
                name="website"
                component={() => (
                  <span className="field-error-msg">{errors.website}</span>
                )}
              />
            </div>
            <div className="field-cont company-name-cont">
              <label htmlFor="companyName">Company Name</label>
              <Field name="companyName" className="company-name-input" />
              <ErrorMessage
                name="companyName"
                component={() => (
                  <span className="field-error-msg">{errors.companyName}</span>
                )}
              />
            </div>
            <div className="submit-cont">
              <button type="submit" id="submitBtn" className="action-button">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export { ManageUserData, RenderHeader };
export default ManageUserData;
