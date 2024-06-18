import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../img/icon.jpg';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, usernameState } from '../recoil/atom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUsername = useSetRecoilState(usernameState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      console.log("Server response",response) // 서버 응답을 로그로 출력하여 확인 

      const token = response.headers['authorization'];
      const username = response.data.username;

      if (token && username) {
        localStorage.setItem('token', token); // 로컬 스토리지에 token 저장
        localStorage.setItem('username', username); // 로컬 스토리지에 username 저장
        setIsLoggedIn(true);
        setUsername(username);
        navigate('/');//로그인 후 메인 페이지로 이동
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 중 오류가 발생했습니다!', error);
      alert('로그인 중 오류가 발생했습니다!');
    }
  };


  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-10">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="mx-auto h-10 w-auto" />
          </a>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative -space-y-px rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
            <div>
              <label htmlFor="email-address" className="sr-only">
                아이디(이메일)
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder=" 아이디(이메일)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder=" 비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-blue-600"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                아이디 기억하기
              </label>
            </div>

            <div className="text-sm leading-6">
              <a href="/" className="font-semibold text-blue-600 hover:text-blue-500">
                비밀번호 찾기
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              로그인
            </button>
          </div>
        </form>

        <p className="text-center text-sm leading-6 text-gray-500">
          회원이 아니신가요?{' '}
          <a href="/signin" className="font-semibold text-blue-600 hover:text-indigo-500">
            가입하고 서비스를 이용해보세요
          </a>
        </p>
      </div>
    </div>
  );
}