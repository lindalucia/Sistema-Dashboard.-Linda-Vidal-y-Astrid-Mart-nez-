<template>
  <v-row class="d-flex justify-center align-stretch fill-height ma-0 pa-0">
    <!-- Columna Izquierda -->
    <v-col cols="5" class="fondoimagen d-flex flex-column justify-center align-center pa-6">
      <v-card class="card-uniform pa-4 mb-4 text-center rounded-lg bg-crema" elevation="6">
        <div class="text-h6 font-weight-bold text-black">Innovar para educar, educar para transformar.</div>
      </v-card>

      <v-card class="card-uniform pa-4 mb-4 text-center rounded-lg bg-crema" elevation="6">
        <div class="text-subtitle-1 font-weight-bold text-black">
          Institución Educativa Nuevo Horizonte
        </div>
      </v-card>

      <v-card class="card-uniform pa-4 mb-4 text-center rounded-lg bg-crema" elevation="6">
        <v-img
          max-width="150"
          height="120"
          :src="escudoLocalUrl"
          alt="Escudo Institucional"
          contain
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
              Cargando Escudo Local...
            </div>
          </template>
        </v-img>
      </v-card>
    </v-col>

    <!-- Columna Derecha -->
    <v-col cols="7" class="fondo d-flex align-center justify-center pa-6">
      <v-card class="pa-10 rounded-xl" elevation="10" max-width="500">
        <h2 class="text-h5 mb-6 text-center text-white-darken-4 font-weight-bold">
          Acceso de Usuarios
        </h2>

        <v-text-field
          label="Correo Electrónico"
          density="compact"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          class="mb-2"
        />

        <v-text-field
          label="Contraseña"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          class="mb-6"
        />

        <v-btn color="#621717" size="large" variant="flat" block @click="login()">
          Iniciar Sesión
        </v-btn>

        <v-card-text class="text-center pt-4">
          <a class="text-white text-decoration-none font-weight-medium" href="#">
            Regístrate ahora
            <v-icon icon="mdi-chevron-right" size="small"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import escudoLocalUrl from '@/assets/escudo-colegio.jpg'

const visible = ref(false)
const router = useRouter()
const login = () => router.push('dashboard')
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.fondoimagen {
  background-color: #621717;
}

.fondo {
  background-color: #fffee8;
}

/* Asegura que las cards no se salgan del alto visible */
.card-uniform {
  width: 100%;
}

/* 💛 Fondo crema para las tarjetas del lado izquierdo */
.bg-crema {
  background-color: #fffee8 !important;
}
</style>
