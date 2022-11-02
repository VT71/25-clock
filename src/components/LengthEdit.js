import React from 'react';
import '../App.css';

function LengthEdit({ property }) {
    return (
        <div className='length-container m-auto p-3 rounded'>
            <h2>{`${property} Length`}</h2>
            <div className='edit-container d-flex flex-row justify-content-evenly align-items-center'>
                <i class='fa-solid fa-circle-up'></i>
                <p className='m-0'>5</p>
                <i class='fa-solid fa-circle-down'></i>
            </div>
        </div>
    );
}

export default LengthEdit;
