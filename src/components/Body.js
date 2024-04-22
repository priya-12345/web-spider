import React, { useState } from 'react';
import axios from 'axios';
import UrlInput from './UrlInput';
import ImageCarousel from './ImageCarousel';
import WordCount from './WordCount';

function Body() {
  const [images, setImages] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [topWords, setTopWords] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [showWordCount, setShowWordCount] = useState(false);[]

  const fetchImagesAndWords = async (url) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = proxyUrl + url;
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
      const words = text.split(/\s+/);
      const wordFreq = {};
      words.forEach(word => {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      });
  
      // Sort word frequencies and get top 10
      const sortedWords = Object.keys(wordFreq).sort((a, b) => wordFreq[b] - wordFreq[a]);
      const topWords = sortedWords.slice(0, 10).map(word => ({ word, count: wordFreq[word] }));
      setTopWords(topWords);
      setWordCount(words.length);
      setShowWordCount(true);
    } catch (error) {
      console.error('Error fetching images and words:', error);
      // Handle the error (e.g., show a message to the user)
      alert('Failed to fetch data. Please try again later.');
    }
  };
  
  return (
    <div>
      <UrlInput onSubmit={fetchImagesAndWords} />
      {showImages && (
        <div>
          <ImageCarousel images={images} />
        </div>
      )}
      {showWordCount && (
        <div>
          <WordCount wordCount={wordCount} topWords={topWords} />
        </div>
      )}
    </div>
  );
  
}

export default Body;
