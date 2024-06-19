import React, {useState, useEffect, useRef} from "react";

function My_Component() {
    
    const input_Ref1 = useRef(null);
    const input_Ref2 = useRef(null);
    const input_Ref3 = useRef(null);

    useEffect(
        () => {
            console.log("component removed");
        }
    )

    function handle_Click1() {
        input_Ref1.current.focus();
        input_Ref1.current.style.backgroundColor = "yellow";
        input_Ref2.current.style.backgroundColor = "";
        input_Ref3.current.style.backgroundColor = "";
    }

    function handle_Click2() {
        input_Ref2.current.focus();
        input_Ref1.current.style.backgroundColor = "";
        input_Ref2.current.style.backgroundColor = "yellow";
        input_Ref3.current.style.backgroundColor = "";
    }

    function handle_Click3() {
        input_Ref3.current.focus();
        input_Ref1.current.style.backgroundColor = "";
        input_Ref2.current.style.backgroundColor = "";
        input_Ref3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handle_Click1}>
                click me!
            </button>
            <input ref={input_Ref1} /><br />

            <button onClick={handle_Click2}>
                click me!
            </button>
            <input ref={input_Ref2} /><br />

            <button onClick={handle_Click3}>
                click me!
            </button>
            <input ref={input_Ref3} />
        </div>
    )
}

export default My_Component

