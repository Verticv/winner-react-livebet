import React from 'react'

import MultiViewSelectButtons from "../../MultiViewSelectButtons/MultiViewSelectButtons"

export default function NumberOfLiveMatches({isMultiView, selectedNav}) {
    
    return (
        <div className="live-matches-number">
            <div className="red-icon"></div>
            <div className='matches-number-content'>
                <p className="text">
                    
                    {selectedNav === 0 ? "즐겨찾기" : "축구"}
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
