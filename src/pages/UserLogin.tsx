import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Login from "../components/Login";
import "../App.css";

function UserLogin() {
  const [value, setValue] = useState("login");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="my-[10rem] bg-slate-50 px-10 pb-5 text-center center ">
        <Box
          sx={{
            mt: "7rem",
            mb: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "light-gray",
          }}
        >
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
            sx={{ mx: "2rem" }}
          >
            <Tab value="signup" label="Sign Up" />
            <Tab value="login" label="Login" />
          </Tabs>
        </Box>
        {value === "login" ? <Login /> : <SignUp />}
      </div>
    </>
  );
}

export default UserLogin;
