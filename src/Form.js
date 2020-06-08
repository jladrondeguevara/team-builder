import React from "react";
import './Form.css'

const Form = () => {
    return (
        <div className="formDiv">
            <form>
                <h3>Add member!</h3>
                <label htmlFor="fname">First name</label>
                <input id="fname"
                type="text"
                name="textfield"
                placeholder="First name"
                />
                <label htmlFor="email">E-mail</label>
                <input id="email"
                type="text"
                name="textfield"
                placeholder="E-mail"
                />
                <label htmlFor="role">Role</label>
                <input id="role"
                type="text"
                name="textfield"
                placeholder="Role"
                />
            </form>
            <button>Submit</button>
        </div>
    )
};

export default Form;