// Set countdown time to 14 days from now

const countdownDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  daysEl.innerText = String(days).padStart(2, '0');
  hoursEl.innerText = String(hours).padStart(2, '0');
  minutesEl.innerText = String(minutes).padStart(2, '0');
  secondsEl.innerText = String(seconds).padStart(2, '0');

  // When countdown finishes
  if (distance < 0) {

    clearInterval(timer);

    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";
  }
}

// Update every second
const timer = setInterval(updateCountdown, 1000);

updateCountdown();