import profile_Pic from './assets/Me.jpg'

function Card() {
    
    return (
        <div className="card">
            <img className="card_Img" src={profile_Pic} alt="profile picture"/>
            <h2 className="card_Title" >Dhope Nation</h2>
            <p className='card_text' >I'm A Web Developer, And A Musician</p>
        </div>
    );
}

export default Card

