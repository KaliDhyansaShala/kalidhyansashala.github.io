// Mobile nav toggle
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (burger) {
  burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    burger.classList.toggle('click-pop');
  });
}

// Click micro-animations
document.addEventListener('click', (e) => {
  const t = e.target.closest('.btn, .nav a');
  if (!t) return;
  t.classList.remove('click-pop');
  void t.offsetWidth; // restart animation
  t.classList.add('click-pop');
  setTimeout(()=>t.classList.remove('click-pop'), 250);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.15});

document.querySelectorAll('.reveal').forEach(el=>{
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Simple toast
window.kdsToast = (msg) => {
  let el = document.querySelector('.toast');
  if(!el){
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2000);
};
