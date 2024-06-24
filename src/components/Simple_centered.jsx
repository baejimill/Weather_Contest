import React from 'react';
import logo from '../img/icon.jpg';
import { Link } from 'react-router-dom';

export default function Simple_centered() {
  return (


    <section className="flex flex-col items-center justify-start h-screen bg-white  py-24 sm:py-32 lg:px-8 lg:pl-72">
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:px-8">
        {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" /> */}

        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">

          <Link to="/prediction" className="flex justify-center items-center">
            <span className="sr-only">위닝 누적 강수량 예측 화면</span>
            <img src={logo} alt="logo" className="h-16 w-auto" />
          </Link>

          <figure className="mt-10">
            <blockquote className="text-center text-sm  leading-8 text-gray-900 sm:text-sm sm:leading-9">
              <p>
                수치모델(3시간 단위) 앙상블 강수 확률 자료를 활용하여 (5~9월)의 누적 강수량을 계급구간으로 예측하는 단일 모델을 확인할수 있습니다! 단일모델은 계속 성능이 업데이트 됩니다.
              </p>
            </blockquote>
          </figure>
          <div className='mt-10'>
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 " >
              예측하기
              
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
