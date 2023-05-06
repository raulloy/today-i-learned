import Header from './components/Header';
import FactForm from './components/FactForm';
import Aside from './components/Aside';
import FactList from './components/FactList';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <FactForm />
      <main>
        <Aside />
        <FactList />
      </main>
    </div>
  );
}

export default App;
