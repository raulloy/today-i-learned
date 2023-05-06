import React from 'react';

const Fact = ({ fact }) => {
  return (
    <li>
      <p>
        {fact.text}
        <a href={fact.source} target="_blank" rel="noreferrer">
          (Source)
        </a>
        <span>#{fact.category}#</span>
      </p>
      <div>
        <button>
          👍 <strong>{fact.votesInteresting}</strong>
        </button>
        <button>
          🤯 <strong>{fact.votesMindblowing}</strong>
        </button>
        <button>
          ⛔️ <strong>{fact.votesFalse}</strong>
        </button>
      </div>
    </li>
  );
};

export default Fact;
