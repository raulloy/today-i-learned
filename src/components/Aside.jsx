import React from 'react';
import { CATEGORIES } from '../data';

const Aside = ({ setCurrCategory }) => {
  const categories = CATEGORIES;
  return (
    <div>
      <aside>
        <ul>
          <li>
            <button onClick={() => setCurrCategory('all')}>All</button>
          </li>
          {categories.map((element, index) => (
            <li key={index}>
              <button onClick={() => setCurrCategory(element.name)}>
                {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
