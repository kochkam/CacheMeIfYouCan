import './App.css';
import Navbar from './components/Navbar/Navbar';
import AdvSearch from './components/AdvSearch/AdvSearch'
import DetailView from './components/DetailView/DetailView'
import {Route, BrowserRouter} from "react-router-dom";
import LinkButton from "./components/LinkButton";
import Home from "./views/Home";
import ResultsList from "./views/ResultsList";
import UserProfile from "./views/UserProfile";
import SearchForm from './components/SearchForm';
import homeicon from './images/home.png';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="search-container">
        <h1>Find your next trail....</h1>
        <SearchForm/>
      </div>
      <div className='base-container'>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/UserProfile" component={UserProfile}/>
          <Route path="/resultslist" component={ResultsList}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
