import React from "react";
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from './components/Whather'
import Login from './components/Login';
import Signin from "./components/Signin";
import Main from "./pages/MainPage";
import BoardPage from "./pages/BoardPage"
import PredictionPage from "./pages/PredictionPage";
import GraphPage from "./pages/GraphPage"
import Footer from './components/Footer';
import MyPage from './pages/MyPage'

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
            <Route path="/board" element={<BoardPage />} />
            <Route path="/prediction" element={<PredictionPage/>}/>
            <Route path="/graph" element={<GraphPage/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;