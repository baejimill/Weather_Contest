import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
    const [show, setShow] = useState(false);

    const clickShow = () => {
        setShow(!show)
    };
    const navigate = useNavigate();

    const handleAskQuestion = () => {
        navigate('/ask_question');
    };

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold text-center">자주하는 질문</h1>

            <div className="mt-5 bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">이 프로젝트는 어떤 프로젝트인가요?</h2>
                <div className="space-y-4">
                    <div>
                        {show && (
                            <>
                        <h3 className="texl-xl font-semibold">프로젝트 설명</h3>
                        <p className="text-gray-700">
                            이 프로젝트는 기상청에서 제공하는 데이터를 사용하여 누적 강수량을 예측하는 모델을 만드는것을 목표로 합니다.
                        </p>
                        </>
                        )}
                    </div>
                    {/**추가 FAQ 항목 여기에서 추가 */}
                    <div className="flex justify-end">
                        <button onClick={clickShow}
                        className="bg-blue-600 text-white px-3 py-2 rounded-full shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >{show ? '간단히 보기': '자세히 보기'}</button>
                    </div>
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