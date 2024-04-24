import './App.css';
import { Login } from './components/LoginSignup/Login';
import { Signup } from './components/LoginSignup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
