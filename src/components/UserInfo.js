// import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import axios from 'axios';
// import { userState } from '../recoil/atom';

// const UserInfo = () => {
//   const [user, setUser] = useRecoilState(userState);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/user/info', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error('Failed to fetch user info', error);
//       }
//     };

//     fetchUserInfo();
//   }, [setUser]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">마이페이지</h1>
//       <div className="mt-4">
//         <p><strong>이름:</strong> {user.username}</p>
//         <p><strong>이메일:</strong> {user.email}</p>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">1:1 질문 목록</h2>
//         <ul className="mt-4">
//           {user.questions.map((question) => (
//             <li key={question.id} className="mb-2">
//               <h3 className="text-lg font-medium">{question.title}</h3>
//               <p>{question.content}</p>
//               {question.answer && (
//                 <div className="mt-2 p-2 bg-gray-100 rounded">
//                   <h4 className="font-semibold">답변:</h4>
//                   <p>{question.answer.content}</p>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserInfo;
