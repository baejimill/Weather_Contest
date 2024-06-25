import React, { useState } from 'react';
import Top_Header from '../components/Top_Header';
import FeatureForm from '../components/data_predict/FeatureForm'
import TimeSeries_Graph from '../components/data_predict/TimeSeries_Graph'
import Location_Graph from '../components/data_predict/Location_Graph';

export default function PredictionPage() {
  const [filters, setFilters] = useState(null);

  const handleFeatureFormSubmit = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <div className='w-full'>
      <div>
        <Top_Header />
      </div>
      <div className="w-full flex flex-col mx-auto p-2  items-center justify-center  ">
        <FeatureForm onSubmit={handleFeatureFormSubmit} />
        {filters && (
          // <div className="w-full flex items-center justify-start py-24 sm:py-32 lg:px-8 lg:pl-72">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 py-5 sm:py-5 lg:px-8 lg:pl-72 ">  
            <div>
            <TimeSeries_Graph filters={filters} /></div>
            <div>
            <Location_Graph filters={filters} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
