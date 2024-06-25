import React, { useState } from 'react';
import Data_Graph from '../components/data_predict/Data_Graph';
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
    <div>
      <div>
        <Top_Header />
      </div>
      <div className="container mx-auto p-4">
        <FeatureForm onSubmit={handleFeatureFormSubmit} />
        {filters && (
          <div className="flex flex-row justify-around">
            <TimeSeries_Graph filters={filters} />
            <Location_Graph filters={filters} />
          </div>
        )}
      </div>
    </div>
  );
}
