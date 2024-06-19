import React, {useState, useEffect} from "react";

function MyComponent() {

    const [width, set_Width] = useState(window.innerWidth);
    const [height, set_Height] = useState(window.innerHeight);

    // WITHOUT USING useEffect()
    // window.addEventListener("resize", handle_Resize);

    // USING useEffect()
    useEffect(
        () => {
            window.addEventListener("resize", handle_Resize);
            console.log("added");

            // CLEANUP CODE Unmount FREE up space for other component
            return () => {
                window.removeEventListener("resize", handle_Resize);
                console.log("removed");
            }
        }, []
    )

    useEffect(
        () => {
            document.title = `Size: ${width} x ${height}`;
        }, [width, height]
    )

    function handle_Resize() {
        set_Width(window.innerWidth);
        set_Height(window.innerHeight);
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
    
}

export default MyComponent
