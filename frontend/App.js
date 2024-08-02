// App.js
import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import MultiSelectDropdown from './MultiSelectDropdown';
import Response from './Response';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (responseData) {
      setSelectedOptions([]);
    }
  }, [responseData]);

  const renderResponse = (data) => {
    setResponseData(data);
  };

  return (
    <div>
      <h1>{process.env.ROLL_NUMBER}</h1>
      <InputField renderResponse={renderResponse} />
      {responseData && (
        <div>
          <MultiSelectDropdown
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <Response data={responseData} selectedOptions={selectedOptions} />
        </div>
      )}
    </div>
  );
};

export default App;