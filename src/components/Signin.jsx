import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, usernameState } from '../recoil/atom';
import logo from '../img/icon.jpg';

export default function Signin() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setRecoilUsername = useSetRecoilState(usernameState);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치 하지 않습니다!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/members', {
        username,
        email,
        password
      });
      console.log('User created:', response.data);

      //회원가입 후 자동 로그인 처리
      const loginResponse = await axios.post('http://localhost:8080/login', { email, password });
      const { token } = loginResponse.data;

      // 토큰과 사용자 이름을 로컬 스토리지와 Recoil 상태에 저장
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
      setRecoilUsername(username);

      navigate('/');

    }catch (error) {
      if (error.response && error.response.status === 400) {
        
      }else{
      console.error('회원가입하는 중 오류가 발생했습니다!',  error)
      alert('이미 가입한 회원입니다! '); //이미 가입된 회원의 경우
    }
   }
  };

    return (
        
        <div className="mt-20 flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm space-y-10">
            <div>
            <a href="/">
            <img src={logo} alt="logo" className="mx-auto h-10 w-auto" />
              </a>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                회원정보를 입력하세요
              </h2>
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
                </div>
               

                <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
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

              <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="password" className="sr-only">
                    비밀번호 확인
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder=" 비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="name" className="sr-only">
                    이름(닉네임)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder=" 이름(닉네임)"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>


  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  동의하고 가입하기
                </button>
              </div>
            </form>
  
          </div>
        </div>
      
    )
  }
  