import React from 'react';
import { initialFacts } from '../data';

const FactList = () => {
  const factList = initialFacts;
  return (
    <div>
      <section>
        <ul>
          {factList.map((element) => (
            <li key={element.id}>
              <p>
                {element.text}
                <a href={element.source} target="_blank" rel="noreferrer">
                  (Source)
                </a>
                <span>#{element.category}#</span>
              </p>
              <div>
                <button>
                  👍 <strong>{element.votesInteresting}</strong>
                </button>
                <button>
                  🤯 <strong>{element.votesMindblowing}</strong>
                </button>
                <button>
                  ⛔️ <strong>{element.votesFalse}</strong>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FactList;
