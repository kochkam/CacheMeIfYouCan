import React from 'react'

export default function ListItem(props){
    // returns all jsx content for one list item
    return (
        <div className ="list-item">
            <img className = 'result-img' src = {props.img}/>
            <span className ='result-title'>
                <h3 className = 'result-title-text'>{props.title}</h3> 
            </span>
        
        <span className = 'result-act-distance'>
            <p className = 'result-activity'>Activity Level: {props.activityLevel}</p>
            <p className = 'result-distance'>Distance: {props.distance}</p>
        </span>
        <p className = 'result-summary'>Summary: {props.summary}</p>

        <p className = 'result-temp'>Current Temp: {props.temp}</p>
        
        </div>
    )
}