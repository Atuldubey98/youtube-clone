import "./LoginPage.css";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { signInUser, signInWithGoogle } from "../firesetup/loginapi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./LoadingPage";
import { setUserError, setUserLoading } from "../redux/actions/usersActions";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (userReducer.user) {
      navigate("/");
    }
  }, [navigate, userReducer.user]);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== "" && email !== "") {
      try {
        await signInUser(email, password);
        navigate("/", { replace: true });
      } catch (error) {
        dispatch(setUserError(error));
      }
    }
  };
  const onSignInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      dispatch(setUserLoading(true));
      await signInWithGoogle();
      navigate("/", { replace: true });
    } catch (error) {
      dispatch(setUserError(error));
    }
  };
  return userReducer.loading ? (
    <LoadingPage />
  ) : (
    <div className="login-page">
      <div className="login-form">
        <img src="image/you" alt="youtube-logo" className="youtube-logo" />
        <form autoComplete="off" onSubmit={onLoginFormSubmit}>
          <div className="login-field">
            <EmailIcon />
            <input
              placeholder="Email*"
              onChange={onEmailChange}
              type="email"
              name="email"
              value={email}
            />
          </div>
          <div className="login-field">
            <LockIcon />
            <input
              placeholder="Password*"
              onChange={onPasswordChange}
              type="password"
              name="password"
              value={password}
            />
          </div>
          <button type="submit" className="login-btn">
            <LoginIcon />
            <span className="btn-txt">Login</span>
          </button>
          <button onClick={onSignInWithGoogle} className="sign-google">
            <GoogleIcon />
            <span className="btn-txt">Signin with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
