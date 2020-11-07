import React from 'react';


export default function Map(props) {
    var lat = props.searchObj.lat
    var long = props.searchObj.long
    var mapURL = "https://maps.google.com/?q="
    mapURL += lat + "'" + long
    return(
        <div className="detail-column-container">
            <img src="https://www.xda-developers.com/files/2019/06/google-maps-india.jpg" width="200" height="200" />
            <a href={mapURL}  lat >Click for directions</a>
        </div>
    )
}