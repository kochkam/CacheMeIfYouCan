import React from 'react';

class LocationOption extends React.Component {
    render() {
        return(
            <h1>I want to be near...</h1>
        )
    }
}

class TimeOption extends React.Component {
    render() {
        return(
            <h1>I'll be there on...</h1>
        )
    }
}


class DifficultyOption extends React.Component {
    render() {
        return(
            <h1>I'm looking for...</h1>
        )
    }
}

class IncludedTagOption extends React.Component {
    render() {
        return(
            <h1>I want it to have...</h1>
        )
    }
}

class ExcludedTagOption extends React.Component {
    render() {
        return(
            <h1>I don't want it to have...</h1>
        )
    }
}

export default function AdvSearchOptions() {
    return(
        <div className="options-list">
            <LocationOption />
            <TimeOption />
            <DifficultyOption />
            <IncludedTagOption />
            <ExcludedTagOption />
        </div>
    )
}