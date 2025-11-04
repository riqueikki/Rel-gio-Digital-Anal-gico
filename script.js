const digitalClock = document.getElementById('digital-clock');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const toggleBtn = document.getElementById('toggle-theme');
const container = document.querySelector('.container');
const body = document.body;

// Atualiza o relógio digital e analógico
function updateClock() {
  const now = new Date();

  // Relógio digital
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

  // Relógio analógico
  const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
  const minuteDeg = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const secondDeg = now.getSeconds() * 6;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Executa imediatamente ao carregar

// Alternância de modo escuro
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  container.classList.toggle('dark-mode');

  const darkModeOn = body.classList.contains('dark-mode');
  toggleBtn.textContent = darkModeOn ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
