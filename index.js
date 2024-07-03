let inputEl = document.getElementById("input");
let imageEl = document.getElementById("image");
let counterEl = document.getElementById("counter");

let countdown = 10;

let intervalId = null;

intervalId = setInterval(() => {
  countdown = countdown - 1;
  counterEl.textContent = countdown;
  if (countdown === 0) {
    imageEl.src =
      "https://i.pinimg.com/originals/ce/82/a7/ce82a7911a26371bdf25d426b374e7c9.png";
    imageEl.classList.add("boom");

    counterEl.textContent = "BOOM";
    counterEl.style.color = "red";
    clearInterval(intervalId);
    inputEl.value = "";
  }
}, 1000);

inputEl.addEventListener("keydown", function (event) {
  let inputValue = inputEl.value;
  if ((event.key = "Enter" && inputValue === "defuse" && countdown !== 0)) {
    counterEl.textContent = "You Did It!";
    imageEl.src =
      "https://www.cardmessages.com/files/yup-you-did-it-congrats.jpg";
    imageEl.classList.add("boom");
    counterEl.style.color = "green";
    clearInterval(intervalId);
    inputEl.value = "";
  }
});
