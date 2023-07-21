import classes from './TimerDisplay.module.css';

function convertToTimeFormat(seconds) {
    // Calculate minutes and seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Convert to "00:00" format
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    // Combine minutes and seconds
    return `${formattedMinutes}:${formattedSeconds}`;
}

const TimerDisplay = (props) => {
    const displayedTime = convertToTimeFormat(props.timeLeft) || '00:00';

    return (
        <div>
            <h2 className={classes['timer-text']}>{displayedTime}</h2>
        </div>
    );
};

export default TimerDisplay;