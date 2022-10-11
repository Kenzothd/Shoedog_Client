import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Login from "../components/Login";

function UserLogin() {
  const [value, setValue] = useState("login");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          //   textColor="primary"
          //   indicatorColor="primary"
          TabIndicatorProps={{
            style: {
              background: "black",
              color: "black",
            },
          }}
        >
          <Tab value="signup" label="Sign Up" />
          <Tab value="login" label="Login" />
        </Tabs>
        {value === "login" ? <Login /> : <SignUp />}
      </Box>
    </>
  );
}

export default UserLogin;
