function Validation(values) {
    let error = {}
    
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    if (values.name === "") {
      error.name = "Name should not be empty";
    } else {
      error.name = "";
    }
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email format is invalid";
    } else {
      error.email = "";
    }
    
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long";
    } else {
      error.password = "";
    }
    
    return error;
  }
  
  export default Validation;
  