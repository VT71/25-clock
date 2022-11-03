import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

function LengthEdit({ property }) {
    const breakLength = useSelector((state) => state.clock.breakL);
    const sessionLength = useSelector((state) => state.clock.sessionL);
    let value;
    switch (property) {
        case 'Break':
            value = breakLength;
            break;
        case 'Session':
            value = sessionLength;
            break;
        default:
            value = '404';
    }
    return (
        <div className='length-container m-auto p-3 rounded'>
            <h2>{`${property} Length`}</h2>
            <div className='edit-container d-flex flex-row justify-content-evenly align-items-center'>
                <i className='fa-solid fa-circle-up'></i>
                <p className='m-0'>{value}</p>
                <i className='fa-solid fa-circle-down'></i>
            </div>
        </div>
    );
}

export default LengthEdit;
