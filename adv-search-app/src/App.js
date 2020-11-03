import './App.css';
import Navbar from './components/Navbar/Navbar';
import AdvSearch from './components/AdvSearch/AdvSearch'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="page-title"><h1>Find your next hike...</h1></header>
      <AdvSearch />
    </div>
  );
}

export default App;
