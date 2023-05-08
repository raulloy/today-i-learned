import { useEffect, useState } from 'react';
import Header from './components/Header';
import FactForm from './components/FactForm';
import Aside from './components/Aside';
import FactList from './components/FactList';
import { supabase } from './supabase';
import Loader from './components/Loader';
import './App.css';
import Error from './components/Error';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from('facts').select('*');
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setData(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header
        onButtonClick={() => setShowForm(!showForm)}
        showForm={showForm}
      />
      {showForm ? <FactForm setFactList={setData} /> : null}
      <main>
        <Aside />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <FactList factList={data} />
        )}
      </main>
    </div>
  );
}

export default App;
