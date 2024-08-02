// Response.js
import React from 'react';

const Response = ({ data, selectedOptions }) => {
  if (!data) return null;

  const filteredData = data.filter((item) => {
    if (selectedOptions.includes('Alphabets') && typeof item === 'string') {
      return true;
    }
    if (selectedOptions.includes('Numbers') && !isNaN(item)) {
      return true;
    }
    if (selectedOptions.includes('Highest Alphabet') && item === data.highestAlphabet) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <h2>Response</h2>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Response;
