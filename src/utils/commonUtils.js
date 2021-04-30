import React from "react";
import {
  END_POINT_API,
  nameRegex,
  emailRegex,
  phoneRegex,
  webRegex,
  companyNameRegex
} from "appConfig";

const getAllUsers = async (callBack) => {
  const url = END_POINT_API;

  await fetch(url).then((response) => {
    return response.json().then((data) => {
      callBack && callBack(data);
    });
  });
};

const deleteUser = async (userId, callBack) => {
  const url = userId ? `${END_POINT_API}/${userId}` : `${END_POINT_API}`;

  await fetch(url, { method: "DELETE" }).then(async (response) => {
    const data = await response.json();
    if (!response.ok) {
      const error = (data && data.message) || response.status;
      Promise.reject(error);
    }
    callBack && callBack();
  });
};

const getUserById = async (userId, callBack) => {
  const url = userId ? `${END_POINT_API}/${userId}` : `${END_POINT_API}`;

  await fetch(url).then((response) => {
    return response.json().then((data) => {
      callBack && callBack(data);
    });
  });
};

const validateFields = (values) => {
  let errors = {};

  const requiredText = "This field is Required";
  const { userName, email, phone, website, companyName } = values;

  if (!userName) {
    errors.userName = requiredText;
  } else if (!nameRegex.test(userName)) {
    errors.userName = "Please enter valid user name";
  }

  if (!email) {
    errors.email = requiredText;
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter valid email";
  }

  if (!phone) {
    errors.phone = requiredText;
  } else if (!phoneRegex.test(phone)) {
    errors.phone = "Please enter valid phone";
  }

  if (!website) {
    errors.website = requiredText;
  } else if (!webRegex.test(website)) {
    errors.website = "Please enter valid website";
  }

  if (!companyName) {
    errors.companyName = requiredText;
  } else if (!companyNameRegex.test(companyName)) {
    errors.companyName = "Please enter valid company name";
  }

  return errors;
};

export { getAllUsers, getUserById, deleteUser, validateFields };
