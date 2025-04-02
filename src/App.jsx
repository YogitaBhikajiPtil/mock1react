import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Navbar /> {/* Ensure Navbar is included */}
      {user ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;


