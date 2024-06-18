//로그인 상태 recoil로 관리
import {atom} from 'recoil'

export const isLoggedInState = atom({
    key: 'isLoggedInState',
    default: false,
  });
  
  export const usernameState = atom({
    key: 'usernameState',
    default: '',
  });