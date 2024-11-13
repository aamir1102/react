import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard Page</p>
      <Outlet />
    </div>
  );
};

export default Dashboard;
