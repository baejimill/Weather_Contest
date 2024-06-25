// import React, { useState } from 'react';
// import TimeSeries_Grap from './TimeSeries_Graph'
// import Location_Graph from './Location_Graph';
// import TFeatureForm from './FeatureForm';
// import LFeatureForm from './LFeatureForm';

// export default function Data_Graph() {
//   const [filters1, setFilters1] = useState({
//     stn4contest: 'STN001',  // 기본값 설정
//     year: 'A',
//     month: '5',
//     day: '1'
//   });

//   const [filters2, setFilters2] = useState({
//     stn4contest: 'STN001'  // 기본값 설정
//   });

//   const handleFormSubmit1 = (selectedFilters) => {
//     setFilters1(selectedFilters);
//   };

//   const handleFormSubmit2 = (selectedFilters) => {
//     setFilters2(selectedFilters);
//   };

//   return (
//     <div className="flex flex-wrap justify-around">
//       <div className="w-full md:w-1/2 p-4">
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//           <TFeatureForm onSubmit={handleFormSubmit1} title="시간에 따른 누적 강수량" />
//           <TimeSeries_Grap filters={filters1} />
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//           <LFeatureForm onSubmit={handleFormSubmit2} title="지점별 누적 강수량" />
//           <Location_Graph filters={filters2} />
//         </div>
//       </div>
//     </div>
//   );
// }
