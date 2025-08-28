// Get references to DOM elements
const form = document.getElementById("controlsForm");
const input = document.getElementById("lengthInput");
const previewBar = document.getElementById("previewBar");
const resultsContainer = document.getElementById("resultsContainer");

// Listen for the form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form behavior (page reload)
  event.preventDefault();

  const inputValue = input.value.trim(); // Get and trim the input value

  // 1. Input Validation: Do nothing if the input is empty
  if (!inputValue) {
    alert("Please enter a value.");
    return;
  }

  // 2. Update the main preview bar's width
  previewBar.style.width = inputValue;

  // 3. Create and display a new result bar
  addResultBar(inputValue);

  // 4. Clear the input and refocus for the next entry
  input.value = "";
  input.focus();
});

/**
 * Creates a new result bar and appends it to the results container.
 * @param {string} widthValue - The CSS width value to display.
 */
function addResultBar(widthValue) {
  // Create the container div for the result
  const resultDiv = document.createElement("div");
  resultDiv.className = "result-bar";
  resultDiv.style.width = widthValue;

  // Create the code element to show the text
  const code = document.createElement("code");
  code.textContent = `width: ${widthValue}`;

  // Append the code to the div, and the div to the container
  resultDiv.appendChild(code);
  resultsContainer.appendChild(resultDiv);
}
