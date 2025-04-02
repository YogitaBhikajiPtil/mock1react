import { auth, provider } from "../../firebase/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

export const login = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch({ type: "LOGIN_SUCCESS", payload: result.user });
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: "LOGOUT" });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


