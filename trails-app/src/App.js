import './App.css';
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import LinkButton from "./components/LinkButton";
import Home from "./views/Home";
import ResultsList from "./views/ResultsList";
import UserProfile from "./views/UserProfile";
import SearchForm from './components/SearchForm';
import homeicon from './images/home.png';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <img class='homeIcon' src={homeicon} alt='Home Icon'/>
        <LinkButton className='HomeBtn' exact to='/'>Home</LinkButton>
        <LinkButton className='ProfBtn' exact to='/UserProfile'>Hiking Profile</LinkButton>
      </div>
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
