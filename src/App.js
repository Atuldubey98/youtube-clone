import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import "./firesetup/firesetup";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChannelPage from "./pages/ChannelPage";
import { useDispatch } from "react-redux";
import PrivateComponent from "./components/PrivateComponent";
const auth = getAuth();
function App() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navToggle = () => {
    setNav((n) => !n);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
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
          element={
            <PrivateComponent>
              <HomePage nav={nav} navToggle={navToggle} />
            </PrivateComponent>
          }
        />
        <Route
          path="/channel"
          element={
            <PrivateComponent>
              <ChannelPage nav={nav} navToggle={navToggle} />
            </PrivateComponent>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
