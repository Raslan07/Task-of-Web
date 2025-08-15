const btn = document.querySelectorAll(".icon");
const submit = document.querySelector(".button");
const rateChoose = document.querySelector(".rateChoose .choose");
const pageOne = document.getElementById("rate-page");
const pagetwo = document.getElementById("pageTwo");

let choose = true;
let rate = 0;

Array.from(btn).forEach((button) => {
  button.addEventListener("click", choosen);
});

function choosen(e) {
  if (choose) {
    e.target.classList.add("choosen");
    choose = false;
    rate = e.target.textContent;
  } else {
    e.target.classList.remove("choosen");
    choose = true;
    rate = 0;
    return;
  }
}

submit.addEventListener("click", NextPage);

function NextPage() {
    if(rate > 0){
  pageOne.classList.remove("active");
  pagetwo.classList.add("active");
  scoreRate();
    }
    else{
         alert("Please select a rating first.");
    }
}

function scoreRate() {
  rateChoose.textContent = rate;
}
