import React, {useState} from "react"

function Color_Picker() {

    const [color, set_Color] = useState("blue");

    function handle_Color_Change(event) {
        set_Color(event.target.value)
    }

    return (
        <div>
            <h1>Color Picker</h1>
            {/* TO Style Something in "App_Name.jsx" you nedd double kally braces: {{ backgroundColor: white }} */}
            <div style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handle_Color_Change} />
        </div>
    )
}

export default Color_Picker

