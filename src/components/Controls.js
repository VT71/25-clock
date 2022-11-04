import React from 'react';
import { start, setPause, reset } from '../store/slices/ClockSlice';
import { useDispatch, useSelector } from 'react-redux';

let t;

function Controls() {
    const dispatch = useDispatch();
    let pause = useSelector((state) => state.clock.pause);

    return (
        <div className='controls-container m-auto mt-3 d-flex flex-row justify-content-around p-2'>
            <div
                id='start_stop'
                className='start-stop-container'
                role='button'
                onClick={() => {
                    if (pause) {
                        t = setInterval(() => {
                            dispatch(start());
                        }, 1000);
                    } else {
                        clearInterval(t);
                        dispatch(setPause());
                    }
                }}
            >
                <i className='fa-solid fa-play'></i>
                <i className='fa-solid fa-pause'></i>
            </div>
            <div
                id='reset'
                role='button'
                onClick={() => {
                    clearInterval(t);
                    dispatch(reset());
                }}
            >
                <i className='fa-solid fa-rotate'></i>
            </div>
        </div>
    );
}

export default Controls;
