import React from 'react';
import { CATEGORIES } from '../data';

const Aside = () => {
  const categories = CATEGORIES;
  return (
    <div>
      <aside>
        <ul>
          <li>
            <button>All</button>
          </li>
          {categories.map((element, index) => (
            <li key={index}>
              <button>{element.name}</button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
