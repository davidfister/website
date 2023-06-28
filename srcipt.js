const card = document.querySelector('.card'); 


function rotate3D(event) {
  const cardRect = card.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;

  const targetX = event.clientX;
  const targetY = event.clientY;

  const deltaX = targetX - cardCenterX;
  const deltaY = targetY - cardCenterY;

  const angleX = deltaY * 0.01;
  const angleY = -deltaX * 0.005;

  card.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

document.addEventListener('mousemove', rotate3D);
