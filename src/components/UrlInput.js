import React, { useState } from 'react';

function UrlInput({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleChange}
      />
      <button type="submit">Fetch Images and Words</button>
    </form>
  );
}

export default UrlInput;
