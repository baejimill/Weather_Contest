
import React from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  
    const navigate = useNavigate();

    const handleAskQuestion = () => {
        navigate('/ask_question');
    };

    return (
        <div className="max-w-4xl mx-auto p-10 mt-20">
            <h1 className="text-3xl font-bold text-center">자주하는 질문</h1>

            <div className="mt-5 bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="space-y-4">

         <details className="group">
          <summary className="text-xl font-bold mb-4 cursor-pointer group-open:mb-4 outline-none focus:underline">
            이 프로젝트는 어떤 프로젝트인가요?
          </summary>
          <div className="space-y-4">
              <p className="text-gray-700">
                이 프로젝트는 기상청에서 제공하는 데이터를 사용하여 누적 강수량을 예측하는 모델을 만드는 것을 목표로 합니다.
              </p>
          </div>
        </details>  
         
                </div>
            </div>

            <div className="mt-5 bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="space-y-4">

         <details className="group">
          <summary className="text-xl font-bold mb-4 cursor-pointer group-open:mb-4 outline-none focus:underline">
            어떤 기능을 구현하나요?
          </summary>
          <div className="space-y-4">
              <p className="text-gray-700">
              이 프로젝트는 강수량을 예측하고 계급구간으로 나누며, 제공된 데이터를 기반으로 강수량 그래프를 그립니다. 이를 통해 사용자는 미래 강수량을 예측할 수 있으며, 과거 강수량 데이터를 시각적으로 쉽게 확인할 수 있습니다.
              </p>
          </div>
        </details>  
                </div>
            </div>

            <div className="mt-5 bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="space-y-4">

         <details className="group">
          <summary className="text-xl font-bold mb-4 cursor-pointer group-open:mb-4 outline-none focus:underline">
            어쩌구저쩌구어쩌꾸쩌저구구
          </summary>
          <div className="space-y-4">
              <p className="text-gray-700">
               나는 파리의 택시 운전사~ 하지만 프랑스의 택시운전자는 아니다~~!
              </p>
          </div>
        </details>  
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={handleAskQuestion}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:right-2 focus:ring-blue-600"
                >질문하기</button>
            </div>
        </div>
    );
};

export default Board;