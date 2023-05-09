import { useEffect, useState } from 'react';
import Header from './components/Header';
import FactForm from './components/FactForm';
import Aside from './components/Aside';
import FactList from './components/FactList';
import { supabase } from './supabase';
import Loader from './components/Loader';
import Error from './components/Error';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [currCategory, setCurrCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let supabaseQuery = supabase.from('facts').select('*');

      if (currCategory !== 'all') {
        supabaseQuery = supabase
          .from('facts')
          .select('*')
          .eq('category', currCategory);
      }

      const { data, error } = await supabaseQuery;

      if (error) {
        console.log(error);
        setError(error);
      } else {
        setData(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currCategory]);

  return (
    <div className="container">
      <Header
        onButtonClick={() => setShowForm(!showForm)}
        showForm={showForm}
      />
      {showForm ? <FactForm setFactList={setData} /> : null}
      <main>
        <Aside setCurrCategory={setCurrCategory} />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <FactList factList={data} setFactList={setData} />
        )}
      </main>
    </div>
  );
}

export default App;
