import React, { useState } from 'react';
import { CATEGORIES } from '../data';
import { isValidURL } from '../utils';
import { v4 as uuidv4 } from 'uuid';

const FactForm = ({ setFactList }) => {
  const categories = CATEGORIES;
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const textLength = text.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && textLength < 200 && source && isValidURL(source) && category) {
      const newFact = {
        id: uuidv4(),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      setFactList((factList) => [newFact, ...factList]);

      setText('');
      setSource('');
      setCategory('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Share a fact with the world..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - textLength}</span>
        <input
          type="text"
          placeholder="Trustworthy spurce..."
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose category:</option>
          {categories.map((element, index) => (
            <option key={index}>
              {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
            </option>
          ))}
        </select>
        <button>Post</button>
      </form>
    </div>
  );
};

export default FactForm;
