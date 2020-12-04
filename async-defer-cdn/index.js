window.addEventListener('load', () => {
  console.log('load', new Date().getTime());
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', new Date().getTime());
});

function h (type, color) {
  console.log(type, new Date().getTime());
  const TARGET = document.createElement('div');
  TARGET.style.width = '15vw';
  TARGET.style.height = '20px';
  TARGET.style.background = color;
  document.body?.appendChild(TARGET);
}