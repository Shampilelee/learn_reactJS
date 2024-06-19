import React, {useState} from "react";

function On_Change() {
    
    const [shipping, set_Shipping] = useState("");

    function handle_Shipping_Change(event) {
        set_Shipping(event.target.value);
    }

    return (
        <div>
            {/*  "checked={shipping === "Pick up"}" Be Checked Only When "shipping" value is "Pick up" */}
            <label>
                <input type="radio" value="Pick up"
                   checked={shipping === "Pick up"}
                   onChange={handle_Shipping_Change}/>
                Pick Up
            </label><br></br>

            {/*  "checked={shipping === "Delivery"}" Be Checked Only When "shipping" value is "Delivery" */}
            <label>
                <input type="radio" value="Delivery"
                   checked={shipping === "Delivery"}
                   onChange={handle_Shipping_Change} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default On_Change

