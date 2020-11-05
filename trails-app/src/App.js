import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import ResultsList from "./views/ResultsList";
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
          <Route exact path="/" component={Home}/>
          <Route path="/user-profile" component={UserProfile}/>
          <Route path="/results-list/:zip" children={<ResultsList searchObj = {currentSearch} />}/>
          <Route path="/detail-view/:hike_id" children={<DetailView />}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}