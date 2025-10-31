<template>
  <v-app id="inspire">
    <v-app-bar
      height="130"
      dark
      image="https://losmejorescolegios.com/co/wp-content/uploads/sites/12/2024/03/Colegio-Alvernia-Bilingue-Los-Mejores-Colegios-15-1.jpg"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Panel Institucional</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-export"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      rail
      color="#621717"
    >
      <v-list>
        <v-list-item
          :prepend-avatar="escudoLocalUrl"
          subtitle="Montería, Colombia"
          title="I.E Nuevo Horizonte"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="Registro"
          to="/dashboard/registro/"
          ></v-list-item>

        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Matrícula"
          to="/dashboard/matricula/"
          ></v-list-item>
        
        <v-list-item
          prepend-icon="mdi-chart-bar"
          title="Estadísticas"
          to="/dashboard/estadisticas/"
          ></v-list-item>

        <v-list-item
          prepend-icon="mdi-book-open-page-variant"
          title="Asignaturas"
          to="/dashboard/asignaturas/" 
          ></v-list-item>

        <v-list-item
          prepend-icon="mdi-logout"
          title="Salir"
          to="/"
          ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

// ✅ CLAVE: Importación de la imagen local para el avatar
import escudoLocalUrl from '@/assets/escudo-colegio.jpg'

const drawer = ref(true)
</script>

<style scoped>
/* 💄 Estilo base opcional */
.v-application {
  background-color: #fffee8 !important;
}
</style>