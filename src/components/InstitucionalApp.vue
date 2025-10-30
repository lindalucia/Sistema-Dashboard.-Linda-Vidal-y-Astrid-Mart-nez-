<template>
  <v-row class="mt-3 mb-3 pa-4" style="background-color: #621717;">
  <!-- Cambiado el fondo a negro -->
    <v-col cols="12" md="4">
      <v-card class="fill-height custom-card" elevation="0">
        <v-card-item>
          <v-card-title class="d-flex align-center">
            <v-icon start icon="mdi-bullseye-arrow" color="red" size="small"></v-icon>
            <span class="text-red font-weight-bold">MISIÓN</span>
          </v-card-title>
          <v-card-subtitle class="text-black">Formando líderes con propósito social</v-card-subtitle>
        </v-card-item>
        <v-card-text class="text-black">
          La Institución Educativa Nuevo Horizonte ofrece una formación integral a niños, niñas y adolescentes, con el propósito de formar líderes que contribuyan a la construcción de una sociedad ética, justa, y respetuosa del ambiente y del ser humano.
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="fill-height custom-card" elevation="0">
        <v-card-item>
          <v-card-title class="d-flex align-center">
            <v-icon start icon="mdi-eye-outline" color="red" size="small"></v-icon>
            <span class="text-red font-weight-bold">VISIÓN</span>
          </v-card-title>
          <v-card-subtitle class="text-black">Hacia un futuro brillante</v-card-subtitle>
        </v-card-item>
        <v-card-text class="text-black">
          Para el año 2032, la Institución Educativa Nuevo Horizonte tiene como propósito ser reconocida como líder en la formación con enfoque ambiental de los estudiantes de la Comuna 9, destacándose por su responsabilidad, compromiso, creatividad, amor, respeto...
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="fill-height custom-card" elevation="0">
        <v-card-item>
          <v-card-title class="d-flex align-center">
            <v-icon start icon="mdi-shield-check-outline" color="red" size="small"></v-icon>
            <span class="text-red font-weight-bold">VALORES</span>
          </v-card-title>
          <v-card-subtitle class="text-black">Principios que nos guían</v-card-subtitle>
        </v-card-item>
        <v-card-text class="text-black">
          Amor, Respeto, Estudio, Trabajo. Además, se incluyen otros valores que complementan y fortalecen a los anteriores, tales como: Responsabilidad, Alteridad, Solidaridad, Compromiso, Ternura, Afecto...
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.custom-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  background-color: white; 
  border-radius: 4px;
}

.custom-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); 
  background-color: white; 
}

/* El texto de los subtítulos y el cuerpo del texto ya es negro por la clase 'text-black' */
</style>   