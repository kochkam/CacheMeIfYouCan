import React, { Component } from "react";
import SearchResults from '../classes/SearchResults'
import ListItem from '../components/ListItem'
import Hike from '../classes/Hike';
import LinkButton from "../components/LinkButton";
import { useParams } from 'react-router-dom';


function translateZip(zip) { // Zip to location information api info can be found here: zipcodeapi.com/API#zipToLoc

  var apiURL = "http://www.zipcodeapi.com/rest/gPpQfeppCMSXxaOPsb6MgxfBYNoxj6hb9bVFua9rKbqMRCnFE89VMZyWexRmKoRw/info.json/" + zip + "/degrees";

  let req = new XMLHttpRequest();

  req.open('GET', apiURL, true);

  req.addEventListener('load', function () {

    if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);
      return response //return lat and long to caller

    }
    else {
      console.log("error in network request: " + req.statusText);
    }
  });

  req.send(null)

}

function getHikeData(zip){

  obj = translateZip(zip); //translate zip and return JSON obj
  apiKey = "200964805-fbbd50c01b329d117306d1834dfd6a2d";
  maxDistance = "&maxDistance=20"
  lat = obj.lat //get lat and long
  lon = obj.lng

  let req = new XMLHttpRequest();
  url = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon" + maxDistance + apiKey  // api info can be found here: https://www.hikingproject.com/data#_=_

  req.open('GET', url, true)

  req.addEventListener('load', function () {

    if (req.status >= 200 && req.status < 400) {
      var HikeData = JSON.parse(req.responseText);
      return HikeData // use HikeData.trails[i].<attr name> to access the attribute you need. Results returned will be 10. 

    }
    else {
      console.log("error in network request: " + req.statusText);
    }
  });

  req.send(null)

}

// Function fills a SearchResults object's results list with 10 hike objects and returns SearchResults object
// THIS FUNCTION TO BE REPLACED WITH FUNCTION THAT PERFORMS ACTUAL SEARCH REQUEST FROM BACKEND
function createResults(){
  hikeDataArray = getHikeData(zip)
  var searchResults = new SearchResults();
    for (var i = 1; i <= 10; i++){
        searchResults.results.push(new Hike(i, "Title "+ i, "This is the summary for Hike " + i, i, "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80", i, i));
    }
  return searchResults
}

// Function is triggered when hike is clicked and id of hike is passed in
// TRIGGER RENDERING DETAIL VIEW HERE AND HIDE RESULTS LIST
function hikeClick(hikeID){
  console.log("clicked Hike: " + hikeID);
}

export default function ResultsList() {
  // currentSearch object which contains assembled list of hikes
  let {zip} = useParams();
  var currentSearch = createResults(zip);

  return (

    // Build results list    
    // for each hike in currentSearch.results render ListItem
    <div className = 'results-list'>
    {currentSearch.results.map(
      hike => (
        <LinkButton exact to={"/detail-view/" + hike.id}>
          <ListItem id = {hike.id} title = {hike.title} summary = {hike.summary} activityLevel = {hike.activityLevel} img = {hike.imgURL} distance = {hike.distance} temp = {hike.temp} clickFunction = {hikeClick}/>
        </LinkButton>
      )
    )}
    </div>

  );
}
