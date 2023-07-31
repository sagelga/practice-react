import classes from './TimerControl.module.css';

// Flows
// Start --> Pause --> Start (resume) --> Timeout === Stop --> Reset
// Start --> Stop --> Reset
// Start --> Pause --> Stop --> Reset

const TimerControl = (props) => {
    const startButtonClassName = props.timerPaused ? classes.start : classes.pause;
    const startButtonName = props.timerPaused ? 'Start' : 'Pause';

    return (
        <div>
            {/*State 1: Timer haven't started -> Start, Reset*/}
            {/*State 3: Timer started & counting down paused -> Start, Reset*/}
            {<button className={startButtonClassName}
                     onClick={props.startButtonClick}>{startButtonName}</button>}

            {/*/!*State 2: Timer started & counting down continue -> Pause, Reset*!/*/}
            {/*{timerPaused &&*/}
            {/*    <button className={classes.pause} onClick={pauseButtonClickHandler}>Pause</button>}*/}

            {/*State 4: Timer started & counting down timed out -> Reset*/}
            <button className={classes.stop} onClick={props.resetButtonClick}>Reset</button>
        </div>
    );
};
export default TimerControl;