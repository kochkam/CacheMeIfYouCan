import React from 'react';

class Map extends React.Component {
    render() {
        return(
            <div className="detail-column-container">
                <img src="https://www.xda-developers.com/files/2019/06/google-maps-india.jpg" width="200" height="200" />
                <a href='https://maps.google.com'>Click for directions</a>
            </div>
        )
    }
}

export default Map;