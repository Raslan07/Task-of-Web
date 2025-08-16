// Repayment Mortgage Calculator
// ______________________________________
// Mortgage (P) = loan amount
// Monthly rate (R) = interest rate =  ( rate  / 12 )
// Total Number of month (N) = years * 12 NO. of month
// Monthly payment (M) = p . (r.(1+r)**n) / ((1+r)**n - 1)
// Total paid = M * N
// _______________________________________

// Interest Only = M = P * R
// Total repay = (M * N) + P
// _______________________________________

// Get elements
const mortGageAmount = document.querySelector("#mortgage-amount");
const mortGageYear = document.querySelector("#mortgage-term");
const mortGageRate = document.querySelector("#interest-rate");
const monthlyRepay = document.querySelector(".month-1");
const termRepay = document.querySelector(".month-2");
const pageOne = document.querySelector(".beforeResult");
const pageTwo = document.querySelector(".afterResult");
const form = document.querySelector(".mortgage-form");
const clearBTN = document.querySelector(".clear-btn")

// Listen for form submit
form.addEventListener("submit", calcPage);

function calcPage(e) {
  e.preventDefault(); // prevent reload
  
  pageOne.classList.remove("active");
  
  // Read values when form is submitted
  const p = Number(mortGageAmount.value);
  const n = Number(mortGageYear.value) * 12;
  const r = (Number(mortGageRate.value) / 100) / 12;
  
  const selected = document.querySelector('input[name="mortgage-type"]:checked');
  
  if (selected && selected.value === "repayment") {
      // Repayment mortgage formula
      const m = (p * (r * (1 + r) ** n)) / ((1 + r) ** n - 1);
      monthlyRepay.textContent = m.toFixed(2);
      termRepay.textContent = (m * n).toFixed(2);
    } else if (selected && selected.value === "interest-only") {
        // Interest-only mortgage
        const m = p * r;
        monthlyRepay.textContent = m.toFixed(2);
        termRepay.textContent = (m * n + p).toFixed(2);
    } else {
        // No option selected
        monthlyRepay.textContent = "0";
        termRepay.textContent = "0";
        e.preventDefault(); // prevent reload
    }
pageTwo.classList.add("active");
}

clearBTN.addEventListener("click", clearForm);

function clearForm() {
  // reset inputs
  mortGageAmount.value = "";
  mortGageYear.value = "";
  mortGageRate.value = "";

  // reset radio buttons
  const radios = document.querySelectorAll('input[name="mortgage-type"]');
  radios.forEach((radio) => (radio.checked = false));

  // reset results
  monthlyRepay.textContent = "0";
  termRepay.textContent = "0";

  // show beforeResult again, hide afterResult
  pageOne.classList.add("active");
  pageTwo.classList.remove("active");
}
