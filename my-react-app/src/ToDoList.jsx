import React, {useState} from "react";

function To_Do_List() {
    
    const [tasks, set_Tasks] = useState(["breakfast", "bath", "walk dog"]);
    const [new_Task, set_New_Task] = useState("");

    function handle_Input_Chg(event) {
        set_New_Task(event.target.value);
    }

    function add_Task() {

        if (new_Task.trim() !== "") {

            set_Tasks(prev_Tasks => [...prev_Tasks, new_Task]);

            // RESETTING TEXT FIELD
            set_New_Task("");
        }
    }

    function remove_Task(index) {
        
        const updated_Tasks = tasks.filter(
            ( _, element_Index ) => element_Index !== index
        );
        set_Tasks(updated_Tasks);
    }

    function move_Task_Up(index) {
        
        if (index > 0) {
            const updated_Tasks = [...tasks];

            // SWAPPING ELEMENTS with OBJECT DESTRUCTION
            [updated_Tasks[index], updated_Tasks[index - 1]] = [updated_Tasks[index - 1], updated_Tasks[index]];

            set_Tasks(updated_Tasks);
        }
    }

    function move_Task_Down(index) {
        
        if (index < tasks.length - 1) {
            const updated_Tasks = [...tasks];

            // SWAPPING ELEMENTS with OBJECT DESTRUCTION
            [updated_Tasks[index], updated_Tasks[index + 1]] = [updated_Tasks[index + 1], updated_Tasks[index]];

            set_Tasks(updated_Tasks);
        }
    }


    return (
        <div className="to_Do_List">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text" 
                    placeholder="Enter a task" 
                    value={new_Task} 
                    onChange={handle_Input_Chg} 
                />
                <button
                    className="add_button"
                    onClick={add_Task}
                >
                    add
                </button>

                <ol>
                    {
                        tasks.map(
                            (task, index) => 
                                <li key={index}> 
                                    <span className="text"> {task} </span> 


                                    <button 
                                        className="remove_btn" 
                                        onClick={() => remove_Task(index)}
                                    >
                                        delect
                                    </button>

                                    <button 
                                        className="move_btn" 
                                        onClick={() => move_Task_Up(index)}
                                    >
                                        👆
                                    </button>

                                    <button 
                                        className="move_btn" 
                                        onClick={() => move_Task_Down(index)}
                                    >
                                        👇
                                    </button>


                                </li>
                        )
                    }
                </ol>

            </div>
        </div>
    );
}

export default To_Do_List

