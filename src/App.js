import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import Headers from './components/top'
import Whather from './components/Whather'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Headers/>
      <Routes>
        {/* <Route path="/" element={<Headers />} /> */}
        <Route path="/" element={<Whather/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
