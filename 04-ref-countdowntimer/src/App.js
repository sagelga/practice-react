import './App.css';
import TimerControl from './components/TimerControl';
import { useEffect, useRef, useState } from 'react';
import TimerDisplay from './components/TimerDisplay';

const defaultTimeLeft = 60;
const App = () => {
    const [timerPaused, setTimerPaused] = useState(true);
    const [timeLeft, setTimeLeft] = useState(defaultTimeLeft);

    const timerRef = useRef();

    const startButtonClickHandler = () => {
        if (!timerPaused) {
            clearInterval(timerRef.current);
        } else {
            timerRef.current = setInterval(decreaseNum, 1000);
        }
        // switch pause timer
        setTimerPaused((timerPaused) => !timerPaused);
    };

    const resetButtonClickHandler = () => {
        setTimerPaused(true);
        clearInterval(timerRef.current);
        setTimeLeft(defaultTimeLeft);
    };

    const decreaseNum = () => setTimeLeft((prev) => prev - 1);

    // Trigger once App component mount
    useEffect(() => {
        // Start the timer (setInterval)
        // and call function decreaseNum to remove timeLeft by 1
        timerRef.current = setInterval(() => decreaseNum, 1000);

        // Clear interval if dismount
        return () => clearInterval(timerRef.current);
    }, []);


    // Stop counting down if the timer is up (at 00:00)
    if (timeLeft < 1 && timerPaused === false) {
        setTimerPaused(true);
        clearInterval(timerRef.current);
    }

    return (
        <div className='App'>
            <div className='timer-container'>
                <h1>Timer</h1>
                <TimerDisplay timeLeft={timeLeft} />
                <TimerControl timerPaused={timerPaused}
                              startButtonClick={startButtonClickHandler}
                              resetButtonClick={resetButtonClickHandler} />
            </div>
        </div>
    );
};

export default App;
