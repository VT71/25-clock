import React from 'react';
import { useSelector } from 'react-redux';

function Timer() {
    let mins = useSelector((state) => state.clock.mins);
    let sec = useSelector((state) => state.clock.sec);
    let mode = useSelector((state) => state.clock.mode);
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    return (
        <div
            id='timer-container'
            className='timer-container m-auto mt-5 p-1 rounded text-center'
        >
            <h1 id='timer-label' className='mode-title'>
                {mode}
            </h1>
            <h2 id='time-left' className='timer-value'>{`${mins}:${sec}`}</h2>
        </div>
    );
}

export default Timer;
