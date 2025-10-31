<template>
  <div class="asignaturas-page">
    <div class="text-center">
    <h2 style="color: #621717; margin-bottom: 10px;">📚 Gestión de Asignaturas</h2>
    <p style="color: #888; margin-bottom: 30px;">Listado y estado actual de las materias ofrecidas</p>
     </div>
     
    <v-row class="asignaturas-grid">
      <v-col
        v-for="asignatura in asignaturas"
        :key="asignatura.id"
        cols="12"
        sm="6"
        md="4"
        lg="3" 
      >
        <v-card 
          class="asignatura-card"
          elevation="6"
          :style="{ 
            'background-color': '#FFF0F0',
            'border-left': `4px solid #B22222` 
          }"
        >
          <v-card-title class="asignatura-title" style="color: #B22222;">
            {{ asignatura.nombre }}
          </v-card-title>
          <v-card-text>
            <p class="mb-3" style="font-size: 0.9em; color: #444;">
                {{ asignatura.descripcionCorta }}
            </p>
            
            <div class="asignatura-info">
              <span>Profesor: <strong>{{ asignatura.profesor }}</strong></span>
            </div>
            
            <v-chip
              color="#B22222"
              label
              text-color="white"
              class="mt-3"
            >
              {{ asignatura.estado }}
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="#B22222" @click="mostrarDetalles(asignatura)">Ver Detalles</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialogVisible"
      max-width="600"
    >
      <v-card v-if="asignaturaSeleccionada">
        <v-card-title class="headline" style="color: #B22222;">
          Detalles de {{ asignaturaSeleccionada.nombre }}
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Código Oficial:</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">{{ asignaturaSeleccionada.codigoOficial }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Créditos Académicos:</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">{{ asignaturaSeleccionada.creditos }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Profesor Encargado:</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">{{ asignaturaSeleccionada.profesor }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Área de Conocimiento:</v-list-item-title>
                <v-list-item-subtitle>{{ asignaturaSeleccionada.area }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Objetivo Principal:</v-list-item-title>
                <v-list-item-subtitle class="full-text-subtitle">{{ asignaturaSeleccionada.objetivo }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Modalidad:</v-list-item-title>
                <v-list-item-subtitle>{{ asignaturaSeleccionada.modalidad }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </v-list>
          <v-alert
            type="success"
            class="mt-4"
            outlined
          >
            Estado: **Activa**
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#B22222" text @click="dialogVisible = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dialogVisible = ref(false);
const asignaturaSeleccionada = ref(null);

const asignaturas = ref([
  { 
    id: 1, 
    nombre: 'Informática', 
    profesor: 'Ing. Elena Torres', 
    estado: 'Activa',
    descripcionCorta: 'Fundamentos de programación y manejo avanzado de herramientas ofimáticas.',
    creditos: 3,
    codigoOficial: '20248531', 
    area: 'Tecnología y Digitalización',
    objetivo: 'Desarrollar habilidades básicas en ofimática y los fundamentos iniciales de la programación estructurada.',
    modalidad: 'Presencial'
  },
  { 
    id: 2, 
    nombre: 'Lengua Castellana', 
    profesor: 'Lic. Andrés Bello', 
    estado: 'Activa',
    descripcionCorta: 'Comprensión lectora, análisis de textos y optimización de la expresión escrita.',
    creditos: 3,
    codigoOficial: '20241079',
    area: 'Humanidades y Comunicación',
    objetivo: 'Fortalecer la comprensión lectora, optimizar la expresión escrita y realizar el análisis de textos literarios clásicos.',
    modalidad: 'Precensial'
  },
  { 
    id: 3, 
    nombre: 'Matemáticas', 
    profesor: 'Dr. Ricardo Botero', 
    estado: 'Activa',
    descripcionCorta: 'Resolución de problemas en las áreas de álgebra y geometría elemental mediante razonamiento.',
    creditos: 3,
    codigoOficial: '20244402',
    area: 'Ciencias Exactas',
    objetivo: 'Aplicar el razonamiento lógico-matemático para la resolución de problemas en las áreas de álgebra y geometría elemental.',
    modalidad: 'Presencial'
  },
  { 
    id: 4, 
    nombre: 'Ciencias Naturales', 
    profesor: 'Biól. Clara Arteaga', 
    estado: 'Activa',
    descripcionCorta: 'Estudio de los procesos biológicos y químicos esenciales, con énfasis en el ecosistema y la salud.',
    creditos: 2,
    codigoOficial: '20246115',
    area: 'Ciencias Experimentales',
    objetivo: 'Comprender la base de los procesos biológicos y químicos esenciales, enfocándose en el ecosistema y la salud.',
    modalidad: 'Presencial'
  },
  { 
    id: 5, 
    nombre: 'Ciencias Sociales', 
    profesor: 'Lic. Sofía Pardo', 
    estado: 'Activa',
    descripcionCorta: 'Análisis de la historia contemporánea y las estructuras geográficas fundamentales del mundo.',
    creditos: 2,
    codigoOficial: '20249003',
    area: 'Estudios Sociales y Geopolítica',
    objetivo: 'Analizar los principales eventos de la historia contemporánea y las estructuras geográficas fundamentales del mundo.',
    modalidad: 'Presencial'
  },
  { 
    id: 6, 
    nombre: 'Inglés', 
    profesor: 'Lic. David Almario', 
    estado: 'Activa',
    descripcionCorta: 'Desarrollo de las cuatro habilidades lingüísticas hasta alcanzar un nivel conversacional funcional.',
    creditos: 2,
    codigoOficial: '20243257',
    area: 'Idiomas Extranjeros',
    objetivo: 'Desarrollar las cuatro habilidades lingüísticas (escuchar, hablar, leer y escribir) alcanzando el nivel A2/B1.',
    modalidad: 'presencial'
  },
  { 
    id: 7, 
    nombre: 'Educación Física', 
    profesor: 'Lic. Juan Montes', 
    estado: 'Activa',
    descripcionCorta: 'Promoción de la vida saludable, desarrollo motriz y trabajo en equipo deportivo.',
    creditos: 2,
    codigoOficial: '20240508',
    area: 'Salud y Bienestar',
    objetivo: 'Promover hábitos de vida saludable, el desarrollo de habilidades motrices y el trabajo en equipo a través del deporte.',
    modalidad: 'Presencial'
  },
  { 
    id: 8, 
    nombre: 'Filosofía', 
    profesor: 'Dra. Ana Espitia', 
    estado: 'Activa',
    descripcionCorta: 'Introducción a la lógica, las corrientes filosóficas y el fomento de la reflexión ética y crítica.',
    creditos: 3,
    codigoOficial: '20247770',
    area: 'Pensamiento Crítico',
    objetivo: 'Introducir a los estudiantes en la lógica y las principales corrientes filosóficas para fomentar la reflexión ética y crítica.',
    modalidad: 'Presencial'
  }
]);

const mostrarDetalles = (asignatura) => {
  asignaturaSeleccionada.value = asignatura;
  dialogVisible.value = true;
};
</script>

<style scoped>
/* Estilos principales */
.asignaturas-page h2 {
  color: #B22222; 
  margin-bottom: 10px;
}

.asignaturas-page p {
  color: #888;
  margin-bottom: 30px;
}

.asignatura-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.asignatura-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.asignatura-title {
  font-weight: bold;
  font-size: 1.2em;
}

.asignatura-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #555;
}

.asignatura-info strong {
  color: #333;
}

.headline {
    font-size: 1.5rem !important;
}

/* 🚀 Solución Final para el Truncamiento del Texto en el Diálogo (usando !important) 🚀 */
/* Esto anula la limitación de línea única que Vuetify impone a v-list-item-subtitle */
.full-text-subtitle {
  white-space: normal !important; /* Permite que el texto se envuelva en nuevas líneas */
  overflow: visible !important;   /* Asegura que no se oculte el contenido */
  text-overflow: unset !important; /* Elimina los puntos suspensivos */
  height: auto !important;         /* Permite que el elemento crezca según el contenido */
  display: block !important;       /* Asegura que el contenedor se comporte como un bloque y respete las nuevas líneas */
}
</style>