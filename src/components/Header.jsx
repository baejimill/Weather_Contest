//로그인 상태에 따라 표시되는 UI만 관리
import React from 'react';
import logo from '../img/icon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState, usernameState } from '../recoil/atom';

const navigation = [
  { name: '지역별 누적 강수량', href: '#' },
  { name: '예측 누적 강수량', href: '#' },
  { name: '게시판', href: '/board' },
];

export default function TopHeaders() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [username, setUsername] = useRecoilState(usernameState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const storedUsername = localStorage.getItem('username');
  //   if (token && storedUsername) {
  //     setIsLoggedIn(true);
  //     setUsername(storedUsername);
  //   }
  // }, []);

  // const handleLogin = (user, token) => {
  //   setIsLoggedIn(true);
  //   setUsername(user);
  //   localStorage.setItem('token', token);
  //   localStorage.setItem('username', user);
  //   navigate('/');
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // navigate('/login');
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex font-bold">
            <span className="sr-only">위닝 누적 강수량 예측 화면</span>
            <img src={logo} alt="logo" className="h-8 w-auto" />
            위닝
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link to={item.href} key={item.name} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {isLoggedIn ? (
            <>
              <span className="text-sm font-semibold leading-6 text-gray-900">안녕하세요, {username}님</span>
              <button
                onClick={handleLogout}
                className="rounded-full bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                로그인
              </Link>
              <Link
                to="signin"
                className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                회원 가입
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}