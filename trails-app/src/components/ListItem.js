import React from 'react'

export default function ListItem(props){
    // returns all jsx content for one list item
    return (
        <div className ="list-item" id= {props.id}>
            <img className = 'result-img' src = {props.img}/>
                 
            <div className="result-text">
                <h3 className = 'result-title-text'>{props.title}</h3>
                <div className= "result-detail-text">
                    <span className= "result-act-dist">
                    <p className = 'result-activity'>Activity Level: {props.activityLevel}</p>
                    <p className = 'result-distance'>Distance: {props.distance}</p>
                    </span>
                    <span className = 'result-summary'>Summary: {props.summary}</span>  
                </div>
            </div>
            <p className = 'result-temp'>Current Temp: {props.temp}</p>
        </div>
    )
}