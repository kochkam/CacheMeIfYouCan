import React from 'react'

export default function ListItem(props){
    // returns all jsx content for one list item
    return (
        <div className ="list-item">
        <p className ='result-title'>{props.title}</p> 
        <p className = 'result-summary'>{props.summary}</p>
        <p className = 'result-difficulty'>{props.difficulty}</p>
        </div>
    )
}