import React, {useState} from "react";
import './Form.css'

const Form = (props) => {
    const [member, setMember] = useState({fname: "", email: "", role: ""})
    
    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault()
        console.log("has been submitted")
        props.addNewMember(member)
        setMember({fname: '', email: '', role: ''})
    }

    return (
        <form onSubmit={submitForm}>
            <h3>Add member!</h3>
            <label htmlFor="fname">First name</label>
            <input id="fname"
            type="text"
            name="textfield"
            placeholder="First name"
            onChange={handleChanges}
            value={member.fname}
            name="fname"
            />
            <label htmlFor="email">E-mail</label>
            <input id="email"
            type="text"
            name="textfield"
            placeholder="E-mail"
            onChange={handleChanges}
            value={member.email}
            name="email"
            />
            <label htmlFor="role">Role</label>
            <input id="role"
            type="text"
            name="textfield"
            placeholder="Role"
            onChange={handleChanges}
            value={member.role}
            name="role"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;