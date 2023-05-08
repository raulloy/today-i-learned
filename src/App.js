import { useEffect, useState } from 'react';
import Header from './components/Header';
import FactForm from './components/FactForm';
import Aside from './components/Aside';
import FactList from './components/FactList';
// import { initialFacts } from './data';
import { supabase } from './supabase';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);

  // const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('facts').select('*');
      if (error) {
        console.log(error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <Header
        onButtonClick={() => setShowForm(!showForm)}
        showForm={showForm}
      />
      {showForm ? <FactForm setFactList={setData} /> : null}
      <main>
        <Aside />
        <FactList factList={data} />
      </main>
    </div>
  );
}

export default App;
