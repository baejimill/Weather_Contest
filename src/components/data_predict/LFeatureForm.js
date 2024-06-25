// import React, { useState } from 'react';

// export default function SimpleFeatureForm({ onSubmit, title }) {
//   const [stn4contest, setStn4contest] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ stn4contest });
//   };

//   const stn4contests = [
//     ...Array.from({ length: 20 }, (_, i) => `STN${String(i + 1).padStart(3, '0')}`),
//     ...Array.from({ length: 5 }, (_, i) => `STN${String(i + 31).padStart(3, '0')}`)
//   ];

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <h2 className="text-lg font-semibold">{title}</h2>
//       <div>
//         <label htmlFor="stn4contest" className="block text-sm font-medium text-gray-700">stn4contest</label>
//         <select
//           id="stn4contest"
//           value={stn4contest}
//           onChange={(e) => setStn4contest(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//         >
//           <option value="">Select AWS 지점 코드</option>
//           {stn4contests.map((stn4contest) => (
//             <option key={stn4contest} value={stn4contest}>{stn4contest}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2">
//           그래프 그리기
//         </button>
//       </div>
//     </form>
//   );
// }
