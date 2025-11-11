import  React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  allowedRoles: Array<"admin" | "user">;
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const token = localStorage.getItem("acessToken");
  const user = JSON.parse(localStorage.getItem("userData") || "null");
  const role = user.role;

  if (!token) {
    return <Navigate to="/" replace />;
  }
  // socket

  if (allowedRoles && !allowedRoles.includes(role as "admin" | "user")) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
