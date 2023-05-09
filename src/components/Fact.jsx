import React, { useState } from 'react';
import { supabase } from '../supabase';

const Fact = ({ fact, setFactList }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async (voteType) => {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from('facts')
      .update({ [voteType]: fact[voteType] + 1 })
      .eq('id', fact.id)
      .select();
    setIsUpdating(false);

    if (!error) {
      setFactList((facts) =>
        facts.map((element) =>
          element.id === fact.id ? updatedFact[0] : element
        )
      );
    }
  };

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
        <button
          onClick={() => handleVote('votesInteresting')}
          disabled={isUpdating}
        >
          👍 <strong>{fact.votesInteresting}</strong>
        </button>
        <button
          onClick={() => handleVote('votesMindblowing')}
          disabled={isUpdating}
        >
          🤯 <strong>{fact.votesMindblowing}</strong>
        </button>
        <button onClick={() => handleVote('votesFalse')} disabled={isUpdating}>
          ⛔️ <strong>{fact.votesFalse}</strong>
        </button>
      </div>
    </li>
  );
};

export default Fact;
