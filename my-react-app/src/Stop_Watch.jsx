import React, {useState, useEffect, useRef} from "react"

function StopWatch() {

    const [is_Running, set_Is_Running] = useState(false);
    const [elapsed_Time, set_Elapsed_Time] = useState(0);
    const interval_Id_Ref = useRef(null);
    const start_Time_Ref = useRef(0);

    useEffect(
        () => {
            if (is_Running) {
                interval_Id_Ref.current = setInterval(
                    () => {
                        set_Elapsed_Time(Date.now() - start_Time_Ref.current)
                    },
                10)
            }

            return () => {
                clearInterval(interval_Id_Ref.current);
            }

        }, [is_Running]
    );

    function start() {
        set_Is_Running(true);
        start_Time_Ref.current = Date.now() - elapsed_Time;
    }

    function stop() {
        set_Is_Running(false);
    }

    function reset() {
        set_Elapsed_Time(0);
        set_Is_Running(false);
    }

    function format_Time() {
        
        let hours = Math.floor(elapsed_Time / (1000 * 60 * 60));
        let minutes = Math.floor(elapsed_Time / (1000 * 60) % 60);
        let seconds = Math.floor(elapsed_Time / (1000) % 60);
        // to display only "2" digits: "/ 10".
        let milliseconds = Math.floor((elapsed_Time % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


    return (
        <div>
            <div>{format_Time()}</div>
            <div>
                <button onClick={start}>start</button>
                <button onClick={reset}>reset</button>
                <button onClick={stop}>stop</button>
            </div>
        </div>
    )
    
}

export default StopWatch

