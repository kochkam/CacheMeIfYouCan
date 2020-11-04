import './App.css';
import Navbar from './components/Navbar/Navbar';
import AdvSearch from './components/AdvSearch/AdvSearch'
import DetailView from './components/DetailView/DetailView'
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import ResultsList from "./views/ResultsList";
import UserProfile from "./views/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
