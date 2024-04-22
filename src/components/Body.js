import React, { useState } from 'react';
import axios from 'axios';
import UrlInput from './UrlInput';
import ImageCarousel from './ImageCarousel';
import WordCount from './WordCount';
import { PROXY_URL } from "../utils/constants";

function Body() {
  const [images, setImages] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [topWords, setTopWords] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [showWordCount, setShowWordCount] = useState(false);[]

  const fetchImagesAndWords = async (url) => {
    const targetUrl = { PROXY_URL } + url;
    try {
      const response = await axios.get(targetUrl);
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(response.data, 'text/html');
     
      // Extract images
      const images = Array.from(htmlDoc.querySelectorAll('img')).map(img => img.src);
      setImages(images);
      setShowImages(true);
  
      // Extract text and count words
      const text = htmlDoc.body.textContent || '';
      const words = text.match(/\w+/g) || []; // Extract words using \w+ regex pattern
      const wordFreq = {};
      words.forEach(word => {
      // Convert the word to lowercase before adding it to the frequency dictionary
      const lowercaseWord = word.toLowerCase();
      wordFreq[lowercaseWord] = (wordFreq[lowercaseWord] || 0) + 1;
    });
  
      // Sort word frequencies and get top 10
      const sortedWords = Object.keys(wordFreq).sort((a, b) => wordFreq[b] - wordFreq[a]);
      const topWords = sortedWords.slice(0, 10).map(word => ({ word, count: wordFreq[word] }));
      setTopWords(topWords);
      setWordCount(words.length);
      setShowWordCount(true);
    } catch (error) {
      console.error('Error fetching images and words:', error);
      // Handle the error
      alert('Failed to fetch data. Please try again later.');
    }
  };
  
  return (
    <div>
      <UrlInput onSubmit={fetchImagesAndWords} className="url-input" />
      {showImages && (
        <div>
          <ImageCarousel images={images} />
        </div>
      )}
      {showWordCount && (
        <div className="display-area word-count-container">
          <WordCount wordCount={wordCount} topWords={topWords}  />
        </div>
      )}
    </div>
  ); 
}

export default Body;
