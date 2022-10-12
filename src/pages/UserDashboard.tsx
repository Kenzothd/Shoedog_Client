import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserAlerts from "../components/UserAlerts";
import UserAlertsHistory from "../components/UserAlertsHistory";

function UserDashboard() {
  const [value, setValue] = useState("alerts");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          mt: "7rem",
          mb: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "light-gray",
          maxWidth: "100%",
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
          <Tab value="alerts" label="Alerts" />
          <Tab value="history" label="Alerts History" />
        </Tabs>
      </Box>
      {value === "alerts" ? <UserAlerts /> : <UserAlertsHistory />}
    </>
  );
}

export default UserDashboard;
