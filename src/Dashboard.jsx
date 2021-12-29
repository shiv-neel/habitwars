import React from "react";
import "./stylesheets/Dashboard.css";

import DashboardCard from "./components/DashboardCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const Dashboard = (props) => {
  const d = new Date();
  const dayofweek = d.getDay();
  const day = d.getDate().toString();
  const month = d.getMonth();
  const hr = d.getHours();

  const timeofday = (hr) => {
    if (hr >= 0 && hr < 12) {
      return "Morning";
    } else if (hr >= 12 && hr < 16) {
      return "Afternoon";
    } else return "Evening";
  };

  const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div className="Dashboard">
      <h1 className="title">
        Good {timeofday(hr)}, {props.username}.
      </h1>
      <h3 style={{ fontSize: "1.5rem", color: "#007bff" }}>
        Today is <strong>{daysofweek[dayofweek]}</strong>,{" "}
        {months[month] + " " + day}.
        {month === 11 && day === "24" ? " Merry Christmas Eve!" : ""}
        {month === 11 && day === "25" ? " Merry Christmas!" : ""}
      </h3>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <DashboardCard></DashboardCard>
          </Grid>
          <Grid item xs={6} md={4}>
            <DashboardCard></DashboardCard>
          </Grid>
          <Grid item xs={6} md={4}>
            <DashboardCard></DashboardCard>
          </Grid>
          <Grid item xs={6} md={8}>
            <DashboardCard></DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
