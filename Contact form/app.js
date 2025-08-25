document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default page reload
    if (validateForm()) {
      form.style.display = "none";
      successMessage.style.display = "block";
    }
  });

  function validateForm() {
    let isValid = true;

    // Clear previous errors
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
    document
      .querySelectorAll("input, textarea")
      .forEach((el) => el.classList.remove("error"));

    // 1. Validate First Name
    const firstName = document.getElementById("firstname");
    if (firstName.value.trim() === "") {
      showError(firstName, "This field is required");
      isValid = false;
    }

    // 2. Validate Last Name
    const lastName = document.getElementById("lastname");
    if (lastName.value.trim() === "") {
      showError(lastName, "This field is required");
      isValid = false;
    }

    // 3. Validate Email
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      showError(email, "This field is required");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // 4. Validate Message
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      showError(message, "This field is required");
      isValid = false;
    }

    // 5. Validate Consent Checkbox
    const consent = document.getElementById("consent");
    if (!consent.checked) {
      const consentError = document.getElementById("consent-error");
      consentError.textContent =
        "To submit this form, please consent to being contacted";
      isValid = false;
    }

    return isValid;
  }

  function showError(inputElement, message) {
    inputElement.classList.add("error");
    const errorMessageElement = inputElement.nextElementSibling;
    if (
      errorMessageElement &&
      errorMessageElement.classList.contains("error-message")
    ) {
      errorMessageElement.textContent = message;
    }
  }

  function isValidEmail(email) {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
