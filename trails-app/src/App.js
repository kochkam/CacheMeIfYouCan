import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import ResultsList from "./views/ResultsList";
import UserProfile from "./views/UserProfile";
import DetailView from "./views/DetailView";
import FitnessResultsPage from "./views/FitnessResultsPage";
import SearchResults from "./classes/SearchResults.js";
import FitnessResults from './classes/FitnessResults.js';



var currentSearch = new SearchResults();
var currentUser = new FitnessResults();

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='base-container'>
        <div className="content">
          <Route path="/" children={<Home searchObj = {currentSearch} />}/>
          <Route path="/fitness-results" children={<FitnessResultsPage fitnessObj = {currentUser} />}/>
          <Route path="/user-profile" children={<UserProfile fitnessObj = {currentUser} />}/>
          <Route path="/results-list" children={<FitnessResults fitnessObj = {currentUser} ResultsList searchObj = {currentSearch} />}/>
          <Route path="/detail-view/:hike_id" children={<DetailView searchObj= {currentSearch}/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}