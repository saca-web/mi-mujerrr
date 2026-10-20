JavaScript
const loveBtn = document.getElementById('loveBtn');
const loveMessage = document.getElementById('loveMessage');

const mensajes = [
  "¡Te mando un abrazo apretadito desde aquí! 🫂💖",
  "Recuerda que eres lo más lindo de mi día 🌸",
  "Te amo hoy, mañana y siempre 🥰",
  "¡Eres mi personita favorita en el mundo entero! 🌍✨",
  "No importa la distancia, pronto estaremos juntos 💖"
];

let index = 0;

loveBtn.addEventListener('click', () => {
  loveMessage.textContent = mensajes[index];
  index = (index + 1) % mensajes.length;
});