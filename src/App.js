import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Whather from './components/Whather'
import Login from './components/Login'
import Signin from "./components/Signin"
import Main from "./pages/Main"
import Board from "./pages/Board"

function App() {
  return (
    <BrowserRouter>
   
    <div className="flex-col flex ">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/" element={<Whather/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/board" element={<Board/>}/>
      </Routes>
   
      </div>
     
    </BrowserRouter>
  );
}

export default App;
