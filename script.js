const particles = document.getElementById("particles");

for (let i = 0; i < 60; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.animationDuration = 3 + Math.random() * 7 + "s";
  particles.appendChild(dot);
}

const style = document.createElement('style');
style.innerHTML = `
  .dot {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ffff;
    border-radius: 50%;
    opacity: 0.6;
    animation: floatUp linear infinite;
  }

  @keyframes floatUp {
    from { transform: translateY(0); opacity: 0.6; }
    to { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
