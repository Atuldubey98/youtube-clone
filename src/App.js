import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
function App() {
  const [nav, setNav] = useState(false);
  const navToggle = ()=>{
    setNav(n=>!n);
  }
  return (
    <div className="App">
        <HomePage nav={nav} navToggle={navToggle}/>
    </div>
  );
}

export default App;
