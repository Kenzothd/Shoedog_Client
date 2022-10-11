import { Outlet, useNavigate, Link } from "react-router-dom";
import React from "react";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  return (
    <>
      <h1>This is the nav bar</h1>
      <Outlet />
    </>
  );
}

export default Navbar;
