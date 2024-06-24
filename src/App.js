import React from "react";
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from './components/Whather'
import Login from './components/Login';
import Signin from "./components/Signin";
import Main from "./pages/Main";
import Board from "./pages/Board";
import Footer from './components/Footer';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="flex-col flex">

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;