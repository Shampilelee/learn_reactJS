import React, {useState} from "react";

function Car() {

    // Array of Objects
    const [cars, set_Cars] = useState([]);

    const [car_Year, set_Car_Year] = useState(new Date().getFullYear())
    const [car_Make, set_Car_Make] = useState("");
    const [car_Model, set_Car_Model] = useState("");

    function handle_Add_Car() {
        
        const new_Car = {
            year: car_Year,
            make: car_Make,
            model: car_Model
        }

        set_Cars(prev_Cars => [...prev_Cars, new_Car]);

        // RESETTING TO DEFAULT
        set_Car_Year(new Date().getFullYear());
        set_Car_Make("");
        set_Car_Model("");
    }

    // CLICK CAR TO REMNOVE CLICK
    function handle_Remove_Car(index) {
        set_Cars(
            prev_Cars => prev_Cars.filter(
                ( _, element_Index ) => element_Index !== index
            )
        )
    }

    function handle_Year_Chg(event) {
        set_Car_Year(event.target.value);
    }

    function handle_Make_Chg(event) {
        set_Car_Make(event.target.value);
    }

    function handle_Model_Chg(event) {
        set_Car_Model(event.target.value);
    }

    
    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {
                    cars.map(
                        (car, index) =>
                            <li key={index} onClick={() => handle_Remove_Car(index)}>
                                {car.year} {car.make} {car.model}
                            </li>
                    )
                }
            </ul>

            <input type="number" value={car_Year} onChange={handle_Year_Chg} /><br />
            <input type="text" value={car_Make} onChange={handle_Make_Chg} placeholder="Car made by" /><br />
            <input type="text" value={car_Model} onChange={handle_Model_Chg} placeholder="car model" /><br />
            <button type="submit" onClick={handle_Add_Car}>Add Car</button>

        </div>
    );
}

export default Car

