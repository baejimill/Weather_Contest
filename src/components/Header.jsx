import React, {useEffect, useState} from 'react';
import logo from '../img/icon.jpg';

const navigation = [
  { name: '누적 강수량', href: '#' },
  { name: '지역별 강수량', href: '#' },
  { name: '예측 누적 강수량', href: '#' },
  { name: '게시판', href: '/board' },
];

export default function TopHeaders({ isLoggedIn, username, onLogout }) {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex font-bold">
            <span className="sr-only">위닝 누적 강수량 예측 화면</span>
            <img src={logo} alt="logo" className="h-8 w-auto" />
            위닝
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {isLoggedIn ? (
            <>
              <span className="text-sm font-semibold leading-6 text-gray-900">안녕하세요, {username}님</span>
              <button
                onClick={onLogout}
                className="rounded-full bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                로그인
              </a>
              <a
                href="signin"
                className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                회원 가입
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
