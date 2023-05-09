import React from 'react';
import Fact from './Fact';

const FactList = ({ factList, setFactList }) => {
  if (factList.length === 0) {
    return <div>No facts for this category yet! Create the first one.</div>;
  }
  return (
    <div>
      <section>
        <ul>
          {factList.map((fact) => (
            <Fact key={fact.id} fact={fact} setFactList={setFactList} />
          ))}
        </ul>
        <p>There are {factList.length} facts. Add your own!</p>
      </section>
    </div>
  );
};

export default FactList;
