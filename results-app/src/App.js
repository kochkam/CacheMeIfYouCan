import './App.css';
import SearchResults from './classes/SearchResults'
import ListItem from './components/ListItem'
import Hike from './classes/Hike';


var rl = createResults();
function App() {
  return (
    // for each hike in 
    rl.results.map(
      listitem => (
        <ListItem title = {listitem.title} summary = {listitem.summary} difficulty= {listitem.difficulty}/>
      )
    )
  )
}

// Function fills a SearchResults object's results list with 10 hike objects and returns SearchResults object
function createResults(){
  var searchResults = new SearchResults();
    for (var i = 1; i <= 10; i++){
        searchResults.results.push(new Hike("Hike: "+ i, "This is the summary for Hike: " + i, "difficulty: " + i));
    }
  return searchResults
}

export default App;
