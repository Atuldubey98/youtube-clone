import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import './App.css';
import "./firesetup/firesetup";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
const auth = getAuth();
function App() {
  const [nav, setNav] = useState(false);
  const navToggle = () => {
    setNav(n => !n);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {

      }
    })
    return () => {
      unsubscribe();
    }

  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage nav={nav} navToggle={navToggle} />
        } />
        <Route path='/login' element={<LoginPage />
        } />
      </Routes>
    </div>
  );
}

export default App;
