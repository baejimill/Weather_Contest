import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/icon.jpg';

const Board = () => {
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate('/ask_question');
  };

  return (
    <div className="flex flex-col items-center justify-start lg:px-8 lg:pl-72">
      {/* 배너 추가 */}
      <div className="relative w-full">
        <img src={logo} alt="배너" className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-blue-600 opacity-75"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">자주하는 질문</h1>
          <p className="mt-4 text-center max-w-2xl">
            프로젝트와 관련된 주요 질문들을 모아놓은 자주하는 질문 게시판입니다. <br />
            원하는 답변이 없으면 마이페이지 1:1질문페이지를 이용해주세요.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 w-full">
        {/* 질문 목록 */}
        <div className="mb-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">자주하는 질문</h2>
          </div>

          {/* 드롭다운 질문 목록 */}
          <div className="mb-6 w-full">
            <div className="divide-y">
              <details className="group p-4 w-full border-b border-gray-300">
                <summary className="flex justify-between items-center text-xl mb-2 cursor-pointer group-open:mb-2 outline-none focus:underline w-full">
                  이 프로젝트는 어떤 프로젝트인가요?
                  <svg className="w-5 h-5 text-blue-500 group-open:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="space-y-2 bg-gray-100 p-4 rounded-md w-full">
                  <p className="text-gray-700">
                    기상청에서 제공하는 데이터를 사용하여 누적 강수량을 예측하는 모델을 만드는 것을 목표로 합니다.
                  </p>
                </div>
              </details>
              <details className="group p-4 w-full border-b border-gray-300">
                <summary className="flex justify-between items-center text-xl mb-2 cursor-pointer group-open:mb-2 outline-none focus:underline w-full">
                  어떤 기능을 구현하나요?
                  <svg className="w-5 h-5 text-blue-500 group-open:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="space-y-2 bg-gray-100 p-4 rounded-md w-full">
                  <p className="text-gray-700">
                    강수량을 예측하고 계급구간으로 나누며, 제공된 데이터를 기반으로 강수량 그래프를 그립니다. 이를 통해 사용자는 미래 강수량을 예측할 수 있으며, 과거 강수량 데이터를 시각적으로 쉽게 확인할 수 있습니다.
                  </p>
                </div>
              </details>
              <details className="group p-4 w-full border-b border-gray-300">
                <summary className="flex justify-between items-center text-xl mb-2 cursor-pointer group-open:mb-2 outline-none focus:underline w-full">
                  ~~~~~나중에 수정버전
                  <svg className="w-5 h-5 text-blue-500 group-open:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="space-y-2 bg-gray-100 p-4 rounded-md w-full">
                  <p className="text-gray-700">
                    ~~여기도 내용 추가해서 수정 버전
                  </p>
                </div>
              </details>
              <details className="group p-4 w-full border-b border-gray-300">
                <summary className="flex justify-between items-center text-xl mb-2 cursor-pointer group-open:mb-2 outline-none focus:underline w-full">
                  팀원의 각자 역활이 무엇인가요?
                  <svg className="w-5 h-5 text-blue-500 group-open:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="space-y-2 bg-gray-100 p-4 rounded-md w-full">
                  <p className="text-gray-700">
                    김민정- 데이터 분석/ 플라스크 백엔드
                    배지현- 프론트엔드/백엔드
                  </p>
                </div>
              </details>
            </div>
            <button className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:right-2 focus:ring-blue-600" onClick={handleAskQuestion}>
              질문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
