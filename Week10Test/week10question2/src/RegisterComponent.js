import React from "react";
import './RegisterStyle.css';
class RegisterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert("form submitted successfullly");
        }
 
    }
    validateForm() {
    let fields = this.state.fields;
    let fvalid = true;
    let errors = {};
    if (fields["name"] == '') {
        fvalid = false;
        errors["name"] = "*username cannot be empty";
    }
    if (fields["name"].length < 3) {
        fvalid = false;
        errors["name"] = "*username length";
    }
    if (!fields["name"]) {
        fvalid = false;
        errors["name"] = "*username cannot be empty";
    }
    if (!fields["phno"]) {
        fvalid = false;
        errors["phno"] = "*Please enter your mobile no.";
    }
    if (!fields["address"]) {
        fvalid = false;
        errors["address"] = "*Please enter your address.";
    }
    if (!fields["password"]) {
        fvalid = false;
        errors["password"] = "*Please enter your Password.";
    }
    if (!fields["rpassword"]) {
        fvalid = false;
        errors["rpassword"] = "*enter your Re-type Password.";
    }
    this.setState({
        errors: errors
    });
    return fvalid;
    }
    render() {
        return (
            <div class="parent">
                <div class="column">
                    <form ID="Valid" action="" onsubmit="return login()">
                        <h2>Register New Vendor</h2>
                        <input type="text" id="name" class="log" placeholder="Enter Name" onkeyup="checkInputs()"
                            required /><br /><br />
                        <input type="number" id="phno" class="log" placeholder="Enter Phone Number" onkeyup="checkInputs()"
                            required /><br /><br />
                        <input type="text" id="address" class="log" placeholder="Enter Address" onkeyup="checkInputs()"
                            required /><br /><br />
                        <input type="text" id="vendor" class="log" placeholder="Enter Vendor ID" onkeyup="checkInputs()"
                            required /><br /><br />
                        <input type="password" id="password" class="log" placeholder="Enter Password" onkeyup="checkInputs()"
                            required /><br /><br />
                        <input type="password" id="rpassword" class="log" placeholder="Retype Password" onkeyup="checkInputs()"
                            required /><br /><br />
                        <button type="submit" id="buttonlog" class="login" onclick="login()"
                            disabled><b>Submit</b></button><br /><br />
                    </form>
                </div>
            </div>
        );
    }
}
export default RegisterComponent;