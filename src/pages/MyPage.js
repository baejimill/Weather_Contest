import React from "react";
import Mypage_c from '../components/UserInfo'
import Top_Header from '../components/Top_Header';
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>
      <div>
        <Top_Header/>
      </div>
      <div>
        <Mypage_c />
        {/* <Footer/> */}
      </div>
      
    </div>
  );
}
