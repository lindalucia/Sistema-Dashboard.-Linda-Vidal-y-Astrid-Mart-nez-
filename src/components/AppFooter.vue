<template>
  <v-footer
    app
    height="36"  color="#621717"
    class="d-flex align-center px-4"
  >
    <div class="d-flex align-center">
      <v-avatar size="24" class="mr-2"> <v-img :src="escudoLocalUrl" alt="Escudo I.E Nuevo Horizonte"></v-img>
      </v-avatar>
      <strong class="text-white text-caption">I.E Nuevo Horizonte</strong>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex align-center text-white text-caption">
      
      <span class="mx-2">Calle 25 # 10-15, Montería, Colombia</span>
      
      <span class="mx-1">|</span>
      <span class="mx-2">IENHorizonte@correo.edu.co</span>
      
      <span class="mx-1">|</span>
      <span class="mx-2">+57 310 123 4567</span>
    </div>
  </v-footer>
</template>

<script setup>
import escudoLocalUrl from '@/assets/escudo-colegio.jpg' 
</script>

<style scoped>
/* No se requieren estilos adicionales, las clases de Vuetify manejan la alineación */
</style>