import { useState, useRef, useEffect } from "react";

/**
 * 
 */
function Timer() {
    const [deciseconds, setDeciseconds] = useState(0);
    const timer = useRef();

    // this is the magic - clean-up the timer or else it'll run in the
    // background forever!
    useEffect(function clearTimerOnUnmount() {
        return function clearTimer() {
            clearInterval(timer.current);
        }
    }, [])

    function startTimer() {
        resetTimer();
        timer.current = setInterval(() => {
            console.log("tick")
            setDeciseconds(curr => curr + 1);
        }, 100)
    }

    function stopTimer() {
        clearInterval(timer.current);
    }

    function resetTimer() {
        stopTimer();
        setDeciseconds(0);
    }

    return (
        <div id="Timer">
            <h1 id="Timer.title">Timer!</h1>
            <p id="Timer.value">{deciseconds / 10}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;