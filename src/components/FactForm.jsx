import React from 'react';

const FactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Share a fact with the world..." />
        <span>200</span>
        <input type="text" placeholder="Trustworthy spurce..." />
        <select>
          <option value="">Choose category:</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="finance">Finance</option>
        </select>
        <button>Post</button>
      </form>
    </div>
  );
};

export default FactForm;
