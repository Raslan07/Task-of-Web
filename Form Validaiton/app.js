const form = document.getElementById("reg-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Step 1: check required fields first
  let isFormValid = checkRequired([userName, email, password, confirmPass]);

  // Step 2: if required fields are not empty, check each rule
  if (isFormValid) {
    isFormValid =
      checkLength(userName, 3, 15) &&
      checkEmail(email) &&
      checkLength(password, 6, 25) &&
      checkPasswordsMatch(password, confirmPass);
  }

  // Step 3: final result
  if (isFormValid) {
    alert("✅ Success Registration!");
    form.reset();

    // Reset visual states
    document.querySelectorAll(".form-group").forEach((group) => {
      group.className = "form-group";
    });
  }
});

// ---------------- Validation Functions ----------------

// 1) Required fields
function checkRequired(fields) {
  let isValid = true;

  fields.forEach((field) => {
    if (field.value.trim() === "") {
      showError(field, `${formatFieldName(field)} is required`);
      isValid = false;
    } else {
      showSuccess(field);
    }
  });

  return isValid;
}

// 2) Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${formatFieldName(input)} must be at least ${min} characters`
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${formatFieldName(input)} must be less than ${max} characters`
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

// 3) Check email
function checkEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
}

// 4) Passwords match
function checkPasswordsMatch(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Passwords do not match");
    return false;
  }
  return true;
}

// ---------------- Helpers ----------------

// Capitalize field names from IDs
function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Show error
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

// Show success
function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}
