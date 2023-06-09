import React from 'react';

const Header = ({ onButtonClick, showForm }) => {
  return (
    <div>
      <header>
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
        <button onClick={onButtonClick}>
          {showForm ? 'Close' : 'Share a fact'}
        </button>
      </header>
    </div>
  );
};

export default Header;
