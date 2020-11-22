import React from 'react';


export default function Map(props) {
    var lat = props.searchObj.results[props.hikeIndex].lat
    var long = props.searchObj.results[props.hikeIndex].long
    var mapURL = "https://www.google.com/maps/dir/?api=1&origin="
    mapURL += props.searchObj.zip + "&destination=" + lat + "," + long
    return(
        <div className="detail-column-container-center">
            <img className="google-image" src="https://www.xda-developers.com/files/2019/06/google-maps-india.jpg"/>
            <br></br>
            <a href={mapURL} target = "_blank" >Click here for directions</a>
        </div>
    )
}