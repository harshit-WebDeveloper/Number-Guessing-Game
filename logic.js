const btn = document.querySelector("#guess-btn");
const input = document.querySelector("#guess-input");
const totalAttempt = document.querySelector("#attempt");
const messageToShow = document.querySelector("#message");
let randomNum = Math.floor(Math.random() * 100) + 1;
const resBtn = document.querySelector("#restart-btn");
let count = 0;

function generateRandom() {
  const inputValue = Number(input.value);
  if (!inputValue || inputValue > 100 || inputValue < 0) {
    messageToShow.textContent = "⚠️ Please enter number between 1 to 100";
    messageToShow.style.color = "dodgerblue";
    resBtn.style.display = "none";
    return;
  }
  count += 1;
  if (randomNum === inputValue) {
    messageToShow.textContent = "🎉 Correct! You guessed the number.";
    messageToShow.style.color = "green";
    input.disabled = true;
    btn.disabled = true;
    resBtn.style.display = "inline-block";
  } else if (randomNum > inputValue) {
    resBtn.style.display = "none";
    messageToShow.textContent = "📉 Too low, try a higher number!";
    messageToShow.style.color = "red";
  } else {
    resBtn.style.display = "none";
    messageToShow.textContent = "📈 Too high, try a lower number!";
    messageToShow.style.color = "darkorange";
  }
  totalAttempt.textContent = count;
}

function reset() {
  totalAttempt.textContent = "";
  messageToShow.textContent = "";
  count = 0;
  input.value = "";
  input.disabled = false;
  btn.disabled = false;
  randomNum = Math.floor(Math.random() * 100) + 1;
  resBtn.style.display = "none";
  input.focus();
}

btn.addEventListener("click", generateRandom);

resBtn.addEventListener("click", reset);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateRandom();
});
