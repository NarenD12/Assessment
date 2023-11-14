
class RegisterValid extends React.Component {
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
}