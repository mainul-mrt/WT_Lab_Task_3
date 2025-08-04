document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();
 
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var password = document.getElementById("password");
  var experience = document.getElementById("experience");
  var salary = document.getElementById("salary");
  var terms = document.getElementById("terms");
 
  var valid = true;
 
  if (!/^[A-Za-z\s]{3,}$/.test(name.value.trim())) {
    alert("Name must be at least 3 letters.");
    name.classList.add("invalid");
    valid = false;
  } else {
    name.classList.remove("invalid");
    name.classList.add("valid");
  }
 
  if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    alert("Enter a valid email.");
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
  }
 
  if (!/^\d{11}$/.test(phone.value.trim())) {
    alert("Phone must be exactly 11 digits.");
    phone.classList.add("invalid");
    valid = false;
  } else {
    phone.classList.remove("invalid");
    phone.classList.add("valid");
  }
 
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.value)) {
    alert("Password must have 1 uppercase, 1 lowercase, 1 number, and 8+ characters.");
    password.classList.add("invalid");
    valid = false;
  } else {
    password.classList.remove("invalid");
    password.classList.add("valid");
  }
 
  if (experience.value === "") {
    alert("Please select your experience level.");
    experience.classList.add("invalid");
    valid = false;
  } else {
    experience.classList.remove("invalid");
    experience.classList.add("valid");
  }
 
  if (parseFloat(salary.value) <= 0 || isNaN(salary.value)) {
    alert("Expected salary must be a positive number.");
    salary.classList.add("invalid");
    valid = false;
  } else {
    salary.classList.remove("invalid");
    salary.classList.add("valid");
  }
 
  if (!terms.checked) {
    alert("You must agree to the terms and conditions.");
    valid = false;
  }
 
  if (valid) {
    alert("Form submitted successfully!");
  }
});
 
const inputs = document.querySelectorAll("input, select");
inputs.forEach(field => {
  field.addEventListener("focus", () => {
    field.classList.add("highlight");
  });
 
  field.addEventListener("blur", () => {
    field.classList.remove("highlight");
  });
 
  field.addEventListener("input", () => {
    validateField(field);
  });
});
 
function validateField(field) {
  const value = field.value.trim();
 
  if (field.id === "name") {
    setValidation(field, /^[A-Za-z\s]{3,}$/.test(value));
  } else if (field.id === "email") {
    setValidation(field, /^\S+@\S+\.\S+$/.test(value));
  } else if (field.id === "phone") {
    setValidation(field, /^\d{11}$/.test(value));
  } else if (field.id === "password") {
    setValidation(field, /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value));
  } else if (field.id === "salary") {
    setValidation(field, parseFloat(value) > 0);
  } else if (field.id === "experience") {
    setValidation(field, value !== "");
  }
}
 
function setValidation(field, isValid) {
  field.classList.remove("valid", "invalid");
  if (isValid) {
    field.classList.add("valid");
  } else {
    field.classList.add("invalid");
  }
}
 
 