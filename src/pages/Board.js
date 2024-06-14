
import React from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  
    const navigate = useNavigate();

    const handleAskQuestion = () => {
        navigate('/ask_question');
    };

    return (
        <div className="max-w-4xl mx-auto p-10">
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
                {/* <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">How can I place an order?</summary>
        <div class="px-4 pb-4">
          <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
        </div>
             </details> */}
                </div>
            </div>

            <div className="mt-5 bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="space-y-4">

         <details className="group">
          <summary className="text-xl font-bold mb-4 cursor-pointer group-open:mb-4 outline-none focus:underline">
            아 진짜 하기 싫어 나혼자 어쩌라는거야
          </summary>
          <div className="space-y-4">
              <p className="text-gray-700">
               난 아무것도 모르는 감자인데 뭘 하라는거야 이러다 다 죽어ㅜㅜ
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