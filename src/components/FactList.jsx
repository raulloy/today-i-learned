import React from 'react';
import Fact from './Fact';
import { initialFacts } from '../data';

const FactList = () => {
  const factList = initialFacts;
  return (
    <div>
      <section>
        <ul>
          {factList.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FactList;
