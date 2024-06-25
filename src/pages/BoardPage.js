import React from "react";
import Board from "../components/Board";
import Top_Header from '../components/Top_Header';

export default function Main() {
  return (
    <div>
      <div>
        <Top_Header/>
      </div>
      <div>
        <Board />
     
      </div>
      
    </div>
  );
}
