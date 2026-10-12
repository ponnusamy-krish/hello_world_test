const greetings = [
  ["Hello,", "World", "English"],
  ["Hola,", "Mundo", "Spanish"],
  ["Bonjour,", "le Monde", "French"],
  ["Ciao,", "Mondo", "Italian"],
  ["Hallo,", "Welt", "German"],
  ["Olá,", "Mundo", "Portuguese"],
  ["வணக்கம்,", "உலகம்", "Tamil"],
  ["नमस्ते,", "दुनिया", "Hindi"],
  ["こんにちは、", "世界", "Japanese"],
  ["你好，", "世界", "Chinese"],
  ["안녕하세요,", "세계", "Korean"],
  ["Привет,", "мир", "Russian"],
  ["Merhaba,", "Dünya", "Turkish"],
  ["Jambo,", "Dunia", "Swahili"],
];

const greeting = document.getElementById("greeting");
const sub = document.getElementById("sub");
const next = document.getElementById("next");
const clock = document.getElementById("clock");

let index = 0;

function show(i) {
  const [hello, world, lang] = greetings[i];
  greeting.innerHTML = "";
  [hello, world].forEach((text, n) => {
    const span = document.createElement("span");
    span.className = n === 1 ? "word accent swap" : "word swap";
    span.style.animationDelay = `${n * 0.1}s`;
    span.textContent = text;
    greeting.append(span, " ");
  });
  sub.textContent = i === 0 ? "A small greeting, made with care." : `That was ${lang}.`;
}

next.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  show(index);
});

function tick() {
  clock.textContent = new Date().toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
tick();
setInterval(tick, 1000);
