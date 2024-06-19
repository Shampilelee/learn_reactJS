import React, {useContext} from "react";
import { my_Context } from "./ComponentA";

function ComponentD() {

    const value = useContext(my_Context);
    
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`See you ${value}`}</h2>
        </div>
    )
}

export default ComponentD

