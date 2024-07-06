/* eslint-disable react/prop-types */
// import React from 'react'

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allowedRoles }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  return isLoggedIn && allowedRoles.find((isrole) => isrole == role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to={"/denied"} />
  ) : (
    <Navigate to={"login"} />
  );
}

export default RequireAuth;
