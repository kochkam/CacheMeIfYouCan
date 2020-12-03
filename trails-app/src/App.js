import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import Search from "./views/Search";
import LoadingPage from './views/LoadingPage.js';
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
          <Route exact path="/"><Redirect to="/search" /></Route>
          <Route path="/search" children={<Search searchObj = {currentSearch} />}/>
          <Route path="/loading" children={<LoadingPage />}/>
          <Route path="/user-profile" children={<UserProfile fitnessObj = {currentUser} searchObj = {currentSearch}/>}/>
          <Route path="/fitness-results" children={<FitnessResultsPage fitnessObj = {currentUser} searchObj = {currentSearch}/>}/>
          <Route path="/search/results-list" children={<ResultsList fitnessObj = {currentUser} ResultsList searchObj = {currentSearch} />}/>
          <Route path="/detail-view/:hike_id" children={<DetailView searchObj= {currentSearch}/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}