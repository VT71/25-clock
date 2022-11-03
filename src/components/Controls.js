import React from 'react';

function Controls() {
    return (
        <div className='controls-container m-auto mt-3 d-flex flex-row justify-content-around p-2'>
            <i className='fa-solid fa-circle-play'></i>
            <i className='fa-solid fa-circle-pause'></i>
            <i className='fa-solid fa-rotate'></i>
        </div>
    );
}

export default Controls;
