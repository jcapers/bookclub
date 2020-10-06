const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports.validateLogin = (input) => {
  let errors = {};

  // Converts empty fields to empty strings for easier validation
  data.email = !isEmpty(input.email) ? input.email : "";
  data.password = !isEmpty(input.password) ? input.password : "";

  // Validate login details
  if (Validator.isEmpty(input.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(input.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(input.password)) {
    errors.password = "Password field is required";
  }
  
  // Return {Errors, bool}
  return {
    errors, isValid: isEmpty(errors)
  };
};
}