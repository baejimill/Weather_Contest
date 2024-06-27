//로그인 상태 recoil로 관리
import {atom} from 'recoil'

// 로그인 상태 관리
export const isLoggedInState = atom({
    key: 'isLoggedInState',
    default: false,
  });
  // 사용자 이름 관리
  export const usernameState = atom({
    key: 'usernameState',
    default: '',
  });
  // 사용자 정보 상태 관리
// export const userState = atom({
//   key: 'userState',
//   default: {
//     username: '',
//     email: '',
//     questions: [],
//   },
// });