import React from 'react'

export default function ListItem(props){
    // returns all jsx content for one list item
    return <div className ="list-item">
        <p>{props.title}</p> 
        <p>{props.summary}</p>
        <p>{props.difficulty}</p>
        </div>
}