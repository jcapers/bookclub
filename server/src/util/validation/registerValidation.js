const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateRegistration(input) {
  let errors = {};

  // Converts empty fields to empty strings for easier validation
  input.name = !isEmpty(input.name) ? input.name : "";
  input.displayName =  !isEmpty(input.displayName) ? input.displayName : "";
  input.email = !isEmpty(input.email) ? input.email : "";
  input.password = !isEmpty(input.password) ? input.password : "";
  input.password2 = !isEmpty(input.password2) ? input.password2 : "";

  // Validate Fields and append all errors
  if (Validator.isEmpty(input.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(input.displayName)) {
    errors.displayName = "Display Name field is required";
  }

  if (Validator.isEmpty(input.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(input.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(input.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(input.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(input.password, { min: 8, max: 30 })) {
    errors.password = "Password must be between 8 and 30 characters";
  }

  if (!Validator.equals(input.password, input.password2)) {
    errors.password2 = "Passwords do not match";
  }

  // Return {Errors, bool}
  return {errors, isValid: isEmpty(errors)}
}