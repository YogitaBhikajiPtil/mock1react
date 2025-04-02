import React from "react";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <TaskList />
    </div>
  );
};

export default Dashboard;
