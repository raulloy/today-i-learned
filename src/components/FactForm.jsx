import React, { useState } from 'react';
import { CATEGORIES } from '../data';
import { isValidURL } from '../utils';
import { supabase } from '../supabase';

const FactForm = ({ setFactList }) => {
  const categories = CATEGORIES;
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text && textLength < 200 && source && isValidURL(source) && category) {
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from('facts')
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      if (error) {
        console.error('Error inserting fact:', error);
      } else {
        setFactList((factList) => [newFact[0], ...factList]);
      }

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
          disabled={isUploading}
        />
        <span>{200 - textLength}</span>
        <input
          type="text"
          placeholder="Trustworthy spurce..."
          value={source}
          onChange={(e) => setSource(e.target.value)}
          disabled={isUploading}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isUploading}
        >
          <option value="">Choose category:</option>
          {categories.map((element, index) => (
            <option key={index}>
              {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
            </option>
          ))}
        </select>
        <button disabled={isUploading}>Post</button>
      </form>
    </div>
  );
};

export default FactForm;
