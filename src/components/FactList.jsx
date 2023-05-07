import React from 'react';
import Fact from './Fact';

const FactList = ({ factList }) => {
  return (
    <div>
      <section>
        <ul>
          {factList.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </ul>
        <p>There are {factList.length} facts. Add your own!</p>
      </section>
    </div>
  );
};

export default FactList;
