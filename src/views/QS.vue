<script setup>
import { onMounted, ref } from 'vue'


onMounted(() => {
	document.querySelectorAll('img').forEach(i => {
		i.addEventListener('click', evt => {

		  if (i.classList.contains('zoomed'))
		    i.style.transform = ''
		  else {
		    const myScale = 1000 / i.clientWidth
		    i.style.transform = `scale(${myScale})`
		  }

		  i.classList.toggle('zoomed')
		})
	})
})
//https://stackoverflow.com/questions/68179038/event-listener-is-not-calling-the-function-when-its-passed-as-reference
</script>

<template>
<main>
<div id="wrap">
<h1> How i quantify my life </h1>
<h2>Introduction</h2>
<p> For years i have continuously collected various data about myself. Between May 2021 and March 2025 i used my calendar very precisely and tracked every activity i did with a accuracy of 15 minutes. I use a <a href="https://loophabits.org/">habit tracker (big recommendation)</a> since 2022 and irregularily measure my weight since 2023. Since 2026 i try to evevate my setup to a new level, by also incorporating a <a href="https://www.youtube.com/watch?v=qVVQd9Lg79s">wearable</a>.

</p>
<br><br>
<h2>What happened so far. 4 years of data</h2>
<p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
<div>
	<img src="/public/correl_2026-01-01_2026-07-01.png">
  <figcaption>Last updated: 1.1.2001 </figcaption>
</div>
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
}
h2{
	margin-top: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid #C8CACA;
}
img {
	height: 100%;
	width: 100%;
	transition: transform 0.25s ease;
  cursor: zoom-in;
  border:  2px solid #C8CACA;
  border-radius: 10px;

}
p{
	margin-top:5px;
	line-height: 25px;
	font: 'Roboto Mono'; 
	color: #4B4B4B}

img.zoomed {
  cursor: zoom-out;
}

a {
	display: inline-block;
	border-radius: 12px;   
	font-weight: bold;
	color: #4B4B4B;
	padding-left: 6px;
	padding-right: 6px;
	margin: -6px;
	background-color: #f5e042;
	line-height: 1.26;
	text-decoration: none;
}

a:hover {
  background-color: #e8e4c3;
}



</style>



