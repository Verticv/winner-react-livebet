import React from 'react'

export default function NumberOfLiveMatches() {
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
        </div>
    );
}
