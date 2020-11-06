import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import TestList from "./views/ResultsList";
import UserProfile from "./views/UserProfile";
import DetailView from "./views/DetailView";
import SearchResults from "./classes/SearchResults.js";


var currentSearch = new SearchResults();

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='base-container'>
        <div className="content">
          <Route exact path="/" children={<Home searchObj = {currentSearch} />}/>
          <Route path="/user-profile" component={UserProfile}/>
          <Route path="/results-list/:zip" component={<TestList searchObj = {currentSearch} />}/>
          <Route path="/detail-view/:hike_id" children={<DetailView searchResult = {currentSearch.results}/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}