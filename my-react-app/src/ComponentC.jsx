import React, {useContext} from "react";
import { my_Context } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {

    const value = useContext(my_Context);
    
    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hey ${value}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC

