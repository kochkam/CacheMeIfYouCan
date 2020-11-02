import './App.css';
import SearchResults from './classes/SearchResults'
import ListItem from './components/ListItem'
import Hike from './classes/Hike';


// currentSearch object which contains assembled list of hikes
var currentSearch = createResults();

// Function fills a SearchResults object's results list with 10 hike objects and returns SearchResults object
// THIS FUNCTION TO BE REPLACED WITH FUNCTION THAT PERFORMS ACTUAL SEARCH REQUEST FROM BACKEND
function createResults(){
  var searchResults = new SearchResults();
    for (var i = 1; i <= 10; i++){
        searchResults.results.push(new Hike(i, "Title "+ i, "This is the summary for Hike: " + i, "difficulty: " + i));
    }
  return searchResults
}

function App() {
  return (

    // Build results list    
    // for each hike in currentSearch.results render ListItem
    <div className = 'results-list'>
    {currentSearch.results.map(
      hike => (
        <ListItem key = {hike.id} title = {hike.title} summary = {hike.summary} difficulty= {hike.difficulty}/>
      )
    )}
    </div>

  )
}

export default App;
