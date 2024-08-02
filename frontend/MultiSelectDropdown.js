// MultiSelectDropdown.js
import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Alphabets', 'Numbers', 'Highest Alphabet'];

  const handleSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      newSelectedOptions.splice(newSelectedOptions.indexOf(option), 1);
    } else {
      newSelectedOptions.push(option);
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div>
      <h2>Multi-Select Dropdown</h2>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleSelect(option)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default MultiSelectDropdown;