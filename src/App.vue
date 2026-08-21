<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

</script>

<template>
  <Header v-if="!isHome" />
	<router-view />
  <Footer v-if="!isHome" />
</template>

