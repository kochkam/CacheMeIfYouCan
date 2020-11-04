import React from 'react';
import AdvSearchOptions from './AdvSearhOptions';
import AdvSearchControls from './AdvSearchControls';
import './AdvSearch.css';

export default function AdvSearch() {
    return(
        <div className="adv-search">
            <AdvSearchOptions />
            <AdvSearchControls />
        </div>
    )
}