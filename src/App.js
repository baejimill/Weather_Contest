import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Weather from './components/Whather'
import Login from './components/Login';
import Signin from "./components/Signin";
import Main from "./pages/Main";
import Board from "./pages/Board";
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <BrowserRouter>
        <div className="flex-col flex">
          <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
