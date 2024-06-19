
function Hide_Image() {
    
    const my_Img = './src/assets/Me.jpg';

    // "e" means event
    const handle_Click = (e) => e.target.style.display = "none";

    return (<img src={my_Img} onClick={(e) => handle_Click(e)}></img>)
}

export default Hide_Image