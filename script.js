// Floating 3D tilt effect for sections
const sections = document.querySelectorAll('section');
sections.forEach(sec => {
  sec.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    sec.style.transform = `translate(${x*20}px, ${y*20}px) rotateX(${y*10}deg) rotateY(${x*10}deg)`;
  });
  sec.addEventListener('mouseleave', () => {
    sec.style.transform = 'translate(0,0) rotateX(0) rotateY(0)';
  });
});
