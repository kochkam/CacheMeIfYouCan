import './App.css';
import SearchResults from './classes/SearchResults'
import ListItem from './components/ListItem'
import Hike from './classes/Hike';


// currentSearch object which contains assembled list of hikes
var currentSearch = createResults();

function App() {
  return (
    // for each hike in currentSearch.results render ListItem
    currentSearch.results.map(
      hike => (
        <ListItem key = {hike.id} title = {hike.title} summary = {hike.summary} difficulty= {hike.difficulty}/>
      )
    )
  )
}

// Function fills a SearchResults object's results list with 10 hike objects and returns SearchResults object
function createResults(){
  var searchResults = new SearchResults();
    for (var i = 1; i <= 10; i++){
        searchResults.results.push(new Hike(i, "Hike: "+ i, "This is the summary for Hike: " + i, "difficulty: " + i));
    }
  return searchResults
}

export default App;
