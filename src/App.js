import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import "./firesetup/firesetup";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChannelPage from "./pages/ChannelPage";
import { useDispatch } from "react-redux";
import {
  setUser,
  setUserError,
  setUserLoading,
} from "./redux/actions/usersActions";
const auth = getAuth();
function App() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const navToggle = () => {
    setNav((n) => !n);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserLoading(true));
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
        dispatch(setUser(undefined));
        dispatch(setUserError({ message: "No user found !" }));
      } else {
        dispatch(setUser(user.toJSON()));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage nav={nav} navToggle={navToggle} />}
        />
        <Route
          path="/channel"
          element={<ChannelPage nav={nav} navToggle={navToggle} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
