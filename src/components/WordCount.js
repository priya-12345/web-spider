// WordCount.js
import React from 'react';

function WordCount({ wordCount, topWords }) {
  return (
    <div className="table-container">
      <h2>Word Count: {wordCount}</h2>
      <h2>Top 10 Words:</h2>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {topWords.map((word, index) => (
            <tr key={index}>
              <td>{word.word}</td>
              <td>{word.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordCount;