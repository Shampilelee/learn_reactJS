import PropType from 'prop-types'

function Student(props) {
    
    return (
        <div className="student_Card">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>is_Student: {props.is_Student ? "Yes" : "No"}</p>
        </div>
    );
}
Student.defaultProps = {
    name: "enter name",
    age: 0,
    is_Student: false
}

export default Student

