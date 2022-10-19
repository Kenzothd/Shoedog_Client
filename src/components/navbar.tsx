import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../imgs/logo.png";
import { Flowbite } from "flowbite-react";

function Navbar() {
  const navigate = useNavigate();

  // const handlerLogin = () => {
  //   navigate("/login");
  // };

  // const handlerHome = () => {
  //   navigate("/");
  // };

  // const handlerListings = () => {
  //   navigate("/listings");
  // };

  return (
    <>
      <Outlet />
    </>
  );
}

export default Navbar;
