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
                <label htmlFor="lname">Last name</label>
                <input id="lname"
                type="text"
                name="textfield"
                placeholder="Last name"
                />
                <label htmlFor="email">E-mail</label>
                <input id="email"
                type="text"
                name="textfield"
                placeholder="E-mail"
                />
            </form>
            <button>Submit</button>
        </div>
    )
};

export default Form;