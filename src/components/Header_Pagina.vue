<template>
  <v-app-bar
    :elevation="isShrunk ? 4 : 2"
    :height="isShrunk ? 70 : 150"
    color="#621717"
    class="transition-all"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="text-white font-weight-bold text-center transition-all" :style="{ fontSize: isShrunk ? '18px' : '26px' }">
      Institución Educativa Nuevo Horizonte
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn color="white" variant="outlined" @click="dialog = true">
        Iniciar Sesión
      </v-btn>
    </template>
  </v-app-bar>

  <v-dialog v-model="dialog" width="600px">
    <LoginApp />
  </v-dialog>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LoginApp from '@/components/LoginApp.vue'

const dialog = ref(false)
const isShrunk = ref(false)

const handleScroll = () => {
  // Cuando bajas más de 50px, el header se encoge
  isShrunk.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
