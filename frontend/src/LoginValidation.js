function Validation(values) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    // Validate email
    if (values.email==="") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid"
    } else {
        error.email = ""
    }

    // Validate password
    if (values.password==="") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        alert('login Sucessful');
        // error.password = "Password format is invalid";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
