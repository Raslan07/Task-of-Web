const player = document.querySelector(".user img");
const oppoSiteplayer = document.querySelector(".opposit img");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".selection");

const imagePaths = [
  "rock-paper-scissor-game-images/images/paper.png",
  "rock-paper-scissor-game-images/images/rock.png",
  "rock-paper-scissor-game-images/images/scissors.png",
];

const valueMap = ["P", "R", "S"];
const results = {
  RR: "Draw",
  RP: "CPU Won",
  RS: "Player Won",
  PP: "Draw",
  PR: "Player Won",
  PS: "CPU Won",
  SS: "Draw",
  SP: "Player Won",
  SR: "CPU Won",
};

function disableOptions() {
  options.forEach((option) => (option.style.pointerEvents = "none"));
}
function enableOptions() {
  options.forEach((option) => (option.style.pointerEvents = "auto"));
}

options.forEach((element, index) => {
  element.addEventListener("click", () => {
    result.textContent = "Shaking...";

    disableOptions();

    const imgSRC = element.querySelector("img").src;
    player.src = imgSRC;

    setTimeout(() => {
      const randomChoose = Math.floor(Math.random() * 3);
      const cpuImage = imagePaths[randomChoose];

      oppoSiteplayer.src = cpuImage;

      const playerValue = valueMap[index];
      const cpuValue = valueMap[randomChoose];
      const outcome = results[playerValue + cpuValue];

      result.textContent = outcome;

      enableOptions();
    }, 1000);
  });
});
