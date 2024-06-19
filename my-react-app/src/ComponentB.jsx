import React, {useContext} from "react";
import { my_Context } from "./ComponentA";
import ComponentC from "./ComponentC"

function ComponentB() {

    const value = useContext(my_Context);

    return (
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`Hello ${value}`}</h2>
            <ComponentC />
        </div>
    )
}

export default ComponentB

