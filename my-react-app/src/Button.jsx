

function Button() {

    // "e" means event
    // click button to change button text
    const handle_Click = (e) => e.target.textContent = "Goal";

    return (
        // On Click
        //<button onClick={(e) => handle_Click(e)}>click me</button>
        
        // On Double Click
        <button onDoubleClick={(e) => handle_Click(e)}>click me</button>
    );
}

export default Button


