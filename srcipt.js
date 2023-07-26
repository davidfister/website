const card = document.querySelector('.card'); 
const cursor = document.querySelector('.cursor');
document.querySelector('body').onload = function(){document.querySelector('body').style.setProperty("--deg", 45 +"deg");};


function flip(){
	document.querySelector('body').style.transform = "rotateY(180deg)";
}


function rotateCard(event) {
  const cardRect = card.getBoundingClientRect();
  
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;


  const deltaX =  event.clientX - cardCenterX;
  const deltaY = event.clientY - cardCenterY;

  const angleX = deltaY / (window.innerHeight/ 2) * 25;
  const angleY = -deltaX / (window.innerWidth/ 2) * 25;
  card.style.setProperty("--rotateX", -1 * angleX + "deg");
  card.style.setProperty("--rotateY", -1 * angleY + "deg");
}

function moveCursor(event) {
  setTimeout(
    function () {
      cursor.style.left = (event.clientX)-8 + "px";
      cursor.style.top = (event.clientY)-8 + "px";
    }, 30);
}


function changeColor(event) {
  
  Math.atan2(event.clientY - (window.innerHeight / 2) , event.clientX - (window.innerWidth / 2)) * 180 / Math.PI;
  
  
  var body = document.querySelector('body');
  
  var deg = Math.atan2(event.clientY - (window.innerHeight / 2) , event.clientX - (window.innerWidth / 2)) * 180 / Math.PI + 90
  
  body.style.setProperty("--deg", deg +"deg");
}




document.addEventListener('mousemove', rotateCard);
document.addEventListener('mousemove', moveCursor);
document.addEventListener('mousemove', changeColor);
