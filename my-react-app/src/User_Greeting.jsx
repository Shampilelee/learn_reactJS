

function User_Greeting(props) {

    if (props.is_LoggedIn) {
        return <h2>Welcome {props.username}</h2>
    }
    else {
        return <h2>Please Log In to continue</h2>
    }
    
}

export default User_Greeting

