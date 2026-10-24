const sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};

function playDrum(key) {
  const soundPath = sounds[key];
  if (!soundPath) return;

  const audio = new Audio(soundPath);
  audio.play();

  const button = document.querySelector(`.${key}.drum`);
  if (button) {
    button.classList.add("pressed");
    window.setTimeout(() => button.classList.remove("pressed"), 100);
  }
}

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", () => {
    const key = Array.from(button.classList).find((className) => sounds[className]);
    if (key) playDrum(key);
  });
});

document.addEventListener("keydown", (event) => {
  playDrum(event.key.toLowerCase());
});