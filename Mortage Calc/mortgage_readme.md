# Mortgage Calculations: Repayment vs Interest‑Only

This README explains how to calculate monthly payments and total repayment for two common mortgage types:

- **Repayment (Principal + Interest)**
- **Interest‑Only**

It also includes a worked example for:

- Loan amount **P = 300,000**
- Term **25 years** (n = 300 months)
- Annual interest rate **5.25%** (monthly r = 0.0525/12 ≈ 0.004375)

---

## 1) Formulas

### A. Repayment Mortgage (Principal + Interest)

- **Monthly payment (M):**

  \(M = P \times \frac{r(1+r)^n}{(1+r)^n - 1}\)

- **Total repaid over term:**

  \(\text{Total} = M \times n\)

- **Total interest paid:**

  \(\text{Interest} = (M \times n) - P\)

**Where:**

- *P* = loan/principal amount
- *r* = monthly interest rate = (annual rate) / 12
- *n* = total number of monthly payments = (years × 12)

---

### B. Interest‑Only Mortgage

- **Monthly payment (interest only):**

  \(M = P \times r\)

- **Total repaid over term (including principal at end):**

  \(\text{Total} = (M \times n) + P\)

- **Total interest paid:**

  \(\text{Interest} = M \times n\)

---

## 2) Worked Example (P=300,000, term=25 years, annual rate=5.25%)

- Monthly rate: **r = 0.0525 / 12 = 0.004375**
- Months: **n = 25 × 12 = 300**

### A. Repayment Mortgage

- **Monthly payment M ≈ 1,797.74**
- **Total repaid ≈ 539,322.94**
- **Total interest ≈ 239,322.94**

### B. Interest‑Only Mortgage

- **Monthly payment M = 300,000 × 0.004375 = 1,312.50**
- **Total repaid = (1,312.50 × 300) + 300,000 = 693,750.00**
- **Total interest = 1,312.50 × 300 = 393,750.00**

> All amounts are in the same currency as *P*. Values shown to 2 decimal places.

---

## 3) Quick Check With Your Own Numbers

1. Convert annual % to monthly: `r = annualRate / 12` (e.g., 5.25% → 0.0525/12)
2. Compute months: `n = years * 12`
3. Plug into the formulas above.

**Optional JavaScript snippet** (repayment monthly payment):

```js
function repaymentMonthly(P, annualRatePct, years) {
  const r = (annualRatePct / 100) / 12;
  const n = years * 12;
  return P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function interestOnlyMonthly(P, annualRatePct) {
  const r = (annualRatePct / 100) / 12;
  return P * r;
}
```

---

## 4) Notes

- Assumes **fixed rate** and **monthly compounding**.
- Excludes fees, taxes, insurance, and any overpayments.
- Real‑world products and regulations vary by country/lender.

