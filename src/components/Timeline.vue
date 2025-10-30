<template>
  <v-container class="py-10">
    <v-timeline align="start">

      <!-- 🔹 1. Fundación -->
      <v-timeline-item dot-color="#621717" fill-dot>
        <v-card class="timeline-card light-card">
          <v-card-title class="bg-custom text-white d-flex align-center">
            <v-icon class="me-3" icon="mdi-school" size="x-large"></v-icon>
            <h2 class="title-text">¡Fundación del Colegio (2001)!</h2>
          </v-card-title>
          <v-card-text class="body-text">
            El colegio abre sus puertas con apenas 80 estudiantes y un pequeño grupo de docentes apasionados por ofrecer educación de calidad.
          </v-card-text>
          <v-img
            src="https://www.elsufragio.edu.co/wp-content/uploads/2024/02/2.png"
            height="200"
            cover
          ></v-img>
        </v-card>
      </v-timeline-item>

      <!-- 🔹 2. Crecimiento -->
      <v-timeline-item dot-color="#621717" fill-dot>
        <v-card class="timeline-card dark-card">
          <v-card-title class="bg-white text-custom d-flex justify-end align-center">
            <h2 class="title-text">¡Crecimos rápido! (2005–2010)</h2>
            <v-icon icon="mdi-home-outline" size="x-large"></v-icon>
          </v-card-title>
          <v-card-text class="body-text text-white">
            Llegaron más estudiantes, más salones y la apertura de una cancha nueva. La comunidad escolar empezó a sentirse como una gran familia.
          </v-card-text>
          <v-img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
            height="200"
            cover
          ></v-img>
        </v-card>
      </v-timeline-item>

      <!-- 🔹 3. Innovación -->
      <v-timeline-item dot-color="#621717" fill-dot>
        <v-card class="timeline-card light-card">
          <v-card-title class="bg-custom text-white d-flex align-center">
            <v-icon class="me-3" icon="mdi-laptop" size="x-large"></v-icon>
            <h2 class="title-text">Nuevas ideas (2013–2015)</h2>
          </v-card-title>
          <v-card-text class="body-text">
            Se implementaron tablets, clases divertidas y proyectos que ponían a pensar a todos. El colegio se volvió un lugar más creativo y moderno.
          </v-card-text>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwJ1jO7k70Ffuf0V0FsTwND8-DL9fC1lRlg&s"
            height="200"
            cover
          ></v-img>
        </v-card>
      </v-timeline-item>

      <!-- 🔹 4. Transformación -->
      <v-timeline-item dot-color="#621717" fill-dot>
        <v-card class="timeline-card dark-card">
          <v-card-title class="bg-white text-custom d-flex justify-end align-center">
            <h2 class="title-text">Transformación tecnológica (2016–2020)</h2>
            <v-icon icon="mdi-desktop-mac" size="x-large"></v-icon>
          </v-card-title>
          <v-card-text class="body-text text-white">
            Se implementan plataformas virtuales y metodologías híbridas, adaptándose con éxito al aprendizaje en línea.
          </v-card-text>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoXePQSbE3yzuAh7ftByktwEIyU8Qg3KBMg6RdFMwOfoBo5DZ8zKsDl8ACn6VuvY0Wgw&usqp=CAU"
            cover
          ></v-img>
        </v-card>
      </v-timeline-item>

      <!-- 🔹 5. Educación del futuro -->
      <v-timeline-item dot-color="#621717" fill-dot>
        <v-card class="timeline-card light-card">
          <v-card-title class="bg-custom text-white d-flex align-center">
            <v-icon class="me-3" icon="mdi-rocket-launch" size="x-large"></v-icon>
            <h2 class="title-text">Pioneros en la Educación del Futuro (2025)</h2>
          </v-card-title>
          <v-card-text class="body-text">
            El colegio se posiciona como líder en innovación educativa, implementando nuevas tecnologías y metodologías de enseñanza.
          </v-card-text>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI49vCZbMqFnQSh_NI7W9_hHQ9pQmkXIJlJw&s"
            height="200"
            cover
          ></v-img>
        </v-card>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
/* 🎨 Color personalizado */
.bg-custom {
  background-color: #621717 !important;
}

/* Texto color vino tinto */
.text-custom {
  color: #621717 !important;
}

/* 💫 Estilo general de las cards */
.timeline-card {
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 28px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(98, 23, 23, 0.15);
  max-width: 700px; /* 👈 límite de ancho */
  margin-left: auto;
  margin-right: auto; /* 👈 centrado horizontal */
}

.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(98, 23, 23, 0.3);
}

/* 💡 Alternancia de estilos */
.light-card {
  background-color: #fff;
  color: #333;
}

.dark-card {
  background-color: #621717;
  color: white;
}

/* 📸 Imagen inferior */
.v-img {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

/* 📝 Texto más grande y moderno */
.title-text {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
}

.body-text {
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 16px 20px;
  color: inherit;
}

/* 🧩 Ajustes del contenedor principal */
.v-container {
  max-width: 900px; /* 👈 hace que no se estire tanto */
  margin: 0 auto; /* 👈 centra todo el timeline */
}

/* 🕑 Alineación del timeline */
.v-timeline {
  justify-content: center;
}

.v-timeline-item {
  margin-left: auto;
  margin-right: auto;
}
</style>
