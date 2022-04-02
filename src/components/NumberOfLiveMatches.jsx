import React from 'react'

import MultiViewSelectButtons from "./MultiViewSelectButtons/MultiViewSelectButtons"

export default function NumberOfLiveMatches({isMultiView}) {
    
    return (
        <div className="live-matches-number">
            <div className="red-icon"></div>
            <div className='matches-number-content'>
                <p className="text">
                    축구
                </p>
                <div className='number-wrapper'>
                    <p className="number">80</p>
                </div>
            </div>
            {isMultiView && (
                <div className='multi-view-buttons-wrapper'>
                    <MultiViewSelectButtons />
                </div>
            )}
        </div>
    );
}
