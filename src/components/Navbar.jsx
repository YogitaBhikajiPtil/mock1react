import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <nav>
      <h1>Task Manager</h1>
      {user ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login with Google</button>
      )}
    </nav>
  );
};

export default Navbar;

