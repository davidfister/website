<template>
<main>
	<div id="wrap">
		<h1> Welcome to my website. Under construction. </h1>
	</div>

	<div class="parent">
		<div class="glass"><router-link to="/qs"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"> </router-link></div>
		<div class="glass"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"></div>
		<div class="glass"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"></div>
		<div class="glass"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"></div>
		<div class="glass"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"></div>
		<div class="glass"> <img src="/public/look.svg" alt="Look Trackframe" class="rotating"></div>
	</div> 
</main>

	
</template>



<style scoped>

#wrap{
	max-width: 720px;
	padding: 0px;
	margin: 0 auto;

}
h1{
margin-top: 45px;
	margin-bottom: 45px;
	text-align: center;
}
h2{
	margin-top: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid #C8CACA;
}
img {
	height: 100%;
	width: 51%;
	transition: transform 0.25s ease;
  //border:  2px solid #C8CACA;
  border-radius: 10px;
  margin: auto;
	display: block;
}

p{
	margin-top:5px;
	line-height: 25px;
	font: 'Roboto Mono'; 
	color: #4B4B4B
	}



@-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    -webkit-animation: rotating 60s linear infinite;
}

main {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  min-height: 0;
}

.glass{
	/* From https://css.glass */
	background: rgba(255, 255, 255, 0.36);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	transition: background 0.2s ease;
}
.glass:hover{
	background: rgba(1, 255, 255, 0.36);
	cursor: pointer;
}
.parent:has(.glass:hover) .glass:not(:hover) {
  filter: blur(5px);
  opacity: 0.7;
  transition: filter 0.2s ease, opacity 0.2s ease;
}

</style>



