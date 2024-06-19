import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const my_Context = createContext();

function ComponentA() {

    const [user, set_User] = useState("Dhope");
    
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            
            <my_Context.Provider value={user}>
                <ComponentB />
            </my_Context.Provider>
        </div>
    )
}

export default ComponentA

