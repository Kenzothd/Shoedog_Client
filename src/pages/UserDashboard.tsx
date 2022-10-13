import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserAlerts from "../components/UserAlerts";
import UserAlertsHistory from "../components/UserAlertsHistory";
import UserListings from "../components/UserListings";
import { IAllAlerts } from "./Interface";

function UserDashboard() {
  const [value, setValue] = useState("alerts");
  const [allAlerts, setAllAlerts] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  console.log("test", allAlerts);

  const valueRendering = (value: string) => {
    switch (value) {
      case "listings":
        return (
          <UserListings
            // alertsHistory={alertsHistory}
            // setAlertsHistory={setAlertsHistory}
            allAlerts={allAlerts}
            setAllAlerts={setAllAlerts}
          />
        );

      case "alerts":
        return (
          <UserAlerts
            // alertsHistory={alertsHistory}
            // setAlertsHistory={setAlertsHistory}
            allAlerts={allAlerts}
            setAllAlerts={setAllAlerts}
          />
        );

      case "history":
        return (
          <UserAlertsHistory
            // alertsHistory={alertsHistory}
            // setAlertsHistory={setAlertsHistory}
            allAlerts={allAlerts}
            setAllAlerts={setAllAlerts}
          />
        );
    }
  };

  return (
    <>
      <h1 className="mt-32 text-center text-xl font-bold">User DashBoard</h1>
      <Box
        sx={{
          mt: "2rem",
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
          <Tab value="listings" label="Listings" />
          <Tab value="alerts" label="Alerts" />
          <Tab value="history" label="Alerts History" />
        </Tabs>
      </Box>
      {valueRendering(value)}
    </>
  );
}

export default UserDashboard;
