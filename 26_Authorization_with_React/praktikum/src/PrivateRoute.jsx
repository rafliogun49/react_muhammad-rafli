import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function PrivateRoute() {
  const auth = cookies.get("auth");
  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
}
