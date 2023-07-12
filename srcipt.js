const card = document.querySelector('.card'); 


function rotateCard(event) {
  const cardRect = card.getBoundingClientRect();
  
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;


  const deltaX =  event.clientX - cardCenterX;
  const deltaY = event.clientY - cardCenterY;

  const angleX = deltaY / (window.innerHeight/ 2) * 25;
  const angleY = -deltaX / (window.innerWidth/ 2) * 25;
  console.log(angleX);
  document.querySelector('.card').style.setProperty("--rotateX", angleX + "deg");
  document.querySelector('.card').style.setProperty("--rotateY", angleY + "deg");
}

document.addEventListener('mousemove', rotateCard);
