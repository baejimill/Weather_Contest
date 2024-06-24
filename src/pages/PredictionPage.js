import React from 'react';
import Prediction from "../components/Prediction";
import Top_Header from '../components/Top_Header';

export default function PredictionPage() {
  return (
    <div>
      <div>
        <Top_Header />
      </div>
      <div>
        <Prediction />
      </div>
    </div>
  );
}
