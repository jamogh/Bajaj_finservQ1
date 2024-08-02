// InputField.js
import React, { useState } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const jsonData = JSON.parse(inputValue);
      if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
        throw new Error('Invalid JSON input');
      }
      // Call the REST API
      const response = await fetch('/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });
      const responseData = await response.json();
      // Set the response data to the state
      setInputValue('');
      setError(null);
      // Render the response
      renderResponse(responseData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter JSON input"
      />
      <button type="submit">Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default InputField;