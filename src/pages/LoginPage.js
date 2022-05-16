import "./LoginPage.css";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { signInUser, signInWithGoogle } from "../firesetup/loginapi";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
        const user = await signInUser(email, password);
        console.log(user);
        navigate("/", {replace : true});
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onSignInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/", {replace : true});
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
