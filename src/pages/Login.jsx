import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, logout } from "../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{user ? `Welcome, ${user.displayName}!` : "Sign in to Continue"}</h2>
      {user ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(loginWithGoogle())}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
