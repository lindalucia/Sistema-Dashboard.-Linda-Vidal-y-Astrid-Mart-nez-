<template>
  <Header_Pagina />
  <Carrusel_Compo />
  <InstitucionalApp />
  
  <!-- 🕒 Aquí añadimos tu Timeline -->
  <Timeline />

  <AppFooter />
</template>

<script setup>
import Header_Pagina from '@/components/Header_Pagina.vue'
import Carrusel_Compo from '@/components/Carrusel_Compo.vue'
import InstitucionalApp from '@/components/InstitucionalApp.vue'
import AppFooter from '@/components/AppFooter.vue'
import Timeline from '@/components/Timeline.vue' // 👈 IMPORTANTE
</script>

<style>
body {
  background-color: #fffee8;   
}                              
</style> <!-- fondo d dnd esta la timelin-->


