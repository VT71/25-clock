import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    increaseBreak,
    decreaseBreak,
    increaseSession,
    decreaseSession,
} from '../store/slices/ClockSlice';

function LengthEdit({ property }) {
    const dispatch = useDispatch();
    const breakLength = useSelector((state) => state.clock.breakL);
    const sessionLength = useSelector((state) => state.clock.sessionL);
    const pause = useSelector((state) => state.clock.pause);

    let value;
    let valueId = '';
    let titleId = '';
    let arrowUpId = '';
    let arrowDownId = '';
    let increaseOperation;
    let decreaseOperation;
    switch (property) {
        case 'Break':
            value = breakLength;
            valueId = 'break-length';
            titleId = 'break-label';
            arrowUpId = 'break-increment';
            arrowDownId = 'break-decrement';
            increaseOperation = () => {
                dispatch(increaseBreak());
            };
            decreaseOperation = () => {
                dispatch(decreaseBreak());
            };
            break;
        case 'Session':
            value = sessionLength;
            valueId = 'session-length';
            titleId = 'session-label';
            arrowUpId = 'session-increment';
            arrowDownId = 'session-decrement';
            increaseOperation = () => {
                dispatch(increaseSession());
            };
            decreaseOperation = () => {
                dispatch(decreaseSession());
            };
            break;
        default:
            value = '404';
    }

    return (
        <div className='length-container m-auto p-3 rounded'>
            <h2 id={titleId}>{`${property} Length`}</h2>
            <div className='edit-container d-flex flex-row justify-content-evenly align-items-center'>
                <div
                    id={arrowUpId}
                    role='button'
                    onClick={() => {
                        if (pause) {
                            increaseOperation();
                        }
                    }}
                >
                    <i className='fa-solid fa-circle-up'></i>
                </div>
                <p id={valueId} className='m-0'>
                    {value}
                </p>
                <div
                    id={arrowDownId}
                    role='button'
                    onClick={() => {
                        if (pause) {
                            decreaseOperation();
                        }
                    }}
                >
                    <i className='fa-solid fa-circle-down'></i>
                </div>
            </div>
        </div>
    );
}

export default LengthEdit;
