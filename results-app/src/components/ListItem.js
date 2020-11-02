import React from 'react'

export default function ListItem(props){
    // returns all jsx content for one list item
    return (
        <div className ="list-item">
        <img className = 'result-img' src = {props.img}/>
        <p className ='result-title'>{props.title}</p> 
        <p className = 'result-summary'>Summary: {props.summary}</p>
        <p className = 'result-activity'>Activity Level: {props.activityLevel}</p>
        <p className = 'result-distance'>Distance: {props.distance}</p>
        <p className = 'result-temp'>Current Temp: {props.temp}</p>
        
        </div>
    )
}