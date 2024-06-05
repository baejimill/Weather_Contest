import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from './components/with_call_to_action'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Headers />} />
      </Routes>
    </Router>
  );
}

export default App;
