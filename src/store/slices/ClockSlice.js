import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mins: 25,
    sec: 0,
    breakL: 5,
    sessionL: 25,
    pause: true,
    mode: 'Session',
};

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        increaseBreak(state) {
            if (state.breakL < 60) {
                state.breakL = state.breakL + 1;
                if (state.mode === 'Break') {
                    const prevMins = state.mins;
                    state.mins = state.breakL;
                    state.sec = 0;
                    if (prevMins === 0) {
                        document.getElementById('timer-container').style =
                            'color: #0d0d0d';
                    }
                }
            }
        },
        decreaseBreak(state) {
            if (state.breakL > 1) {
                state.breakL = state.breakL - 1;
                if (state.mode === 'Break') {
                    state.mins = state.breakL;
                    state.sec = 0;
                }
            }
        },
        increaseSession(state) {
            if (state.sessionL < 60) {
                state.sessionL = state.sessionL + 1;
                if (state.mode === 'Session') {
                    const prevMins = state.mins;
                    state.mins = state.sessionL;
                    state.sec = 0;
                    if (prevMins === 0) {
                        document.getElementById('timer-container').style =
                            'color: #0d0d0d';
                    }
                }
            }
        },
        decreaseSession(state) {
            if (state.sessionL > 1) {
                state.sessionL = state.sessionL - 1;
                if (state.mode === 'Session') {
                    state.mins = state.sessionL;
                    state.sec = 0;
                }
            }
        },
        start(state) {
            state.pause = false;
            if (state.mins === 1 && state.sec === 0) {
                document.getElementById('timer-container').style = 'color: red';
            }
            if (state.sec === 0) {
                if (state.mins !== 0) {
                    state.mins--;
                    state.sec = 59;
                } else {
                    document.getElementById('beep').play();
                    document.getElementById('timer-container').style =
                        'color: #0d0d0d';
                    if (state.mode === 'Session') {
                        state.mins = state.breakL;
                        state.mode = 'Break';
                    } else {
                        state.mins = state.sessionL;
                        state.mode = 'Session';
                    }
                }
            } else {
                state.sec--;
            }
        },
        setPause(state) {
            state.pause = true;
        },
        reset(state) {
            document.getElementById('beep').pause();
            document.getElementById('beep').load();
            document.getElementById('timer-container').style = 'color: #0d0d0d';
            state.pause = true;
            state.mode = 'Session';
            state.sessionL = 25;
            state.breakL = 5;
            state.mins = 25;
            state.sec = 0;
        },
    },
});

export const {
    increaseBreak,
    decreaseBreak,
    increaseSession,
    decreaseSession,
    start,
    setPause,
    reset,
} = clockSlice.actions;

export default clockSlice.reducer;
