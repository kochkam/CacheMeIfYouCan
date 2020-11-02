import React from 'react'

export default function ListItem(props){
    // returns all content for one list item
    return <div className ="List-item">
        <p>{props.title}</p> 
        <p>{props.summary}</p>
        <p>{props.difficulty}</p>
        </div>
}