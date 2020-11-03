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
        searchResults.results.push(new Hike(i, "Title "+ i, "This is the summary for Hike " + i, i, "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80", i, i));
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
        <ListItem id = {hike.id} title = {hike.title} summary = {hike.summary} activityLevel = {hike.activityLevel} img = {hike.imgURL} distance = {hike.distance} temp = {hike.temp} clickFunction = {hikeClick}/>
      )
    )}
    </div>

  )
}

// Function is triggered when hike is clicked and id of hike is passed in
// TRIGGER RENDERING DETAIL VIEW HERE AND HIDE RESULTS LIST
function hikeClick(hikeID){
  console.log("clicked Hike: " + hikeID);
}
export default App;
