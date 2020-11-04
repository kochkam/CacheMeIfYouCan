import './App.css';
import Navbar from './components/Navbar/Navbar';
import AdvSearch from '../../trails-app/src/components/AdvSearch/AdvSearch'
import DetailView from './components/DetailView/DetailView'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="page-title"><h1>Find your next hike...</h1></header>
      <DetailView />
    </div>
  );
}

export default App;
