import { useState } from 'react';
import Header from './components/Header';
import FactForm from './components/FactForm';
import Aside from './components/Aside';
import FactList from './components/FactList';
import { initialFacts } from './data';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [factList, setFactList] = useState(initialFacts);

  return (
    <div className="container">
      <Header
        onButtonClick={() => setShowForm(!showForm)}
        showForm={showForm}
      />
      {showForm ? <FactForm setFactList={setFactList} /> : null}
      <main>
        <Aside />
        <FactList factList={factList} />
      </main>
    </div>
  );
}

export default App;
