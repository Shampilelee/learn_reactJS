import React, {useState, useEffect} from "react"

function Digital_Clock() {

    const [time, set_Time] = useState(new Date());

    useEffect(
        () => {
            const interval_Id = setInterval(
                () => {
                    set_Time(new Date())
                }, 
                1000
            )

            // WHEN WE UNMOUNT THE COMPONENT, CLEAN INTERVAL TO FREE UP SPACE
            // !! IF NOT DONE, MAY LEAD TO UNEXPECTED BEHAVIOUR !!
            return () => {
                clearInterval(interval_Id);
            }
        }, []
    )

    function format_Time() {

        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        // CONVERT FROM MILITARY TIME
        // if "hours % 12" = "0" it means false thus why we added "|| 12" to display "12" if "hours % 12" = "0".
        hours = hours % 12 || 12;

        return `${start_With_Zero(hours)}:${start_With_Zero(minutes)}:${start_With_Zero(seconds)} ${meridiem}`;
    }

    // USING STRING CONCATENATION TO ADD "0" TO number least than "10"
    function start_With_Zero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    
    return (
        <div className="clock_Container">
            <div className="clock">
                <span>{format_Time()}</span>
            </div>
        </div>
    )
}

export default Digital_Clock

