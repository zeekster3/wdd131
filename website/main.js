const tips = [
  "Trust nothing – every path can be a trap!",
  "Hidden blocks = hidden death.",
  "Fake pipes are everywhere.",
  "Paths change – expect the unexpected."
];

function showRandomTip() {
  const tipEl = document.querySelector("#tip");
  tipEl && (tipEl.textContent = tips[Math.floor(Math.random() * tips.length)]);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Real troll levels by Me
const levels = [
  {
    title: "Uno Mas Once Twice Trice Loop",
    code: "TY8‑8CW‑9KF",
    difficulty: "Hard",
    img: "images/TwiceTrice.jpg",
    description: "Classic twice‑twice troll level."
  },
  {
    title: "Troll Trainer",
    code: "3JR‑6XM‑GJF",
    difficulty: "Hard",
    img: "images/TrainingTroller.jpg",
    description: "Repeats tricks to teach you its patterns."
  },
  {
    title: "A Troll Worth Fighting For",
    code: "9LP‑M4B‑JPF",
    difficulty: "Hard",
    img: "images/FightingFor.jpg",
    description: "Official Troll Race entry – expect surprising twists."
  },
  {
    title: "Troller Dice Roller: High Stakes",
    code: "SYW‑Y2X‑91G",
    difficulty: "Hard",
    img: "images/HighStakes.jpg",
    description: "Two changing paths – it's different each playthrough."
  }
];

function showLevels() {
  const container = document.querySelector("#levelsContainer");
  if (!container) return;
  levels.forEach(level => {
    const card = document.createElement("div");
    card.className = "level-card hard-level";
    card.innerHTML = `
      <h3>${level.title} by zeekster3</h3>
      <p><strong>Level Code:</strong> ${level.code}</p>
      <img src="${level.img}" alt="${level.title}" width="300">
      <p>${level.description}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomTip();
  showLevels();
});
document.querySelector("#newTipButton")?.addEventListener("click", showRandomTip);
document.querySelector("#themeButton")?.addEventListener("click", toggleTheme);
