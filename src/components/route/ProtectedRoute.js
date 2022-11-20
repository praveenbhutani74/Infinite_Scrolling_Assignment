import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { ChatState } from "../context/ContextApi";

const ProtectedRoute = () => {
  const { isLogged } = ChatState();
  return isLogged === true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
