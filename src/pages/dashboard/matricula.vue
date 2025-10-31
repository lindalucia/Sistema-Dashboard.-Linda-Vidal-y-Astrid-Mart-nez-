<template>
  <v-container fluid class="pa-10 fill-height d-flex flex-column justify-start">
    <div class="overview">
      <h2>📈 Resumen de Matrículas</h2>
      <p>Métricas clave de estudiantes y procesos</p>

      <div class="stats-grid">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="stat-card"
        >
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-value">{{ stat.value }}</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { icon: '🧑‍🎓', label: 'Estudiantes Activos', value: '1,400' },
  { icon: '✍️', label: 'Matrículas Nuevas', value: '100' },
  { icon: '📚', label: 'Cursos Abiertos', value: '8' },
  { icon: '⬆️', label: 'Tasa de Retención', value: '+94%' }
])
</script>

<style scoped>
/* 🌟 Fondo general */
.v-container {
  background: linear-gradient(180deg, #FBECEC, #fff);
  border-radius: 16px;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
}

/* 📋 Sección general */
.overview {
  width: 100%;
  text-align: center;
  margin: 20px auto;
}

/* 🔸 Encabezado */
.overview h2 {
  color: #621717;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 8px;
}

.overview p {
  color: #8b2c2c;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

/* 🧱 GRID de tarjetas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
}

/* 🎴 Tarjeta */
.stat-card {
  background: linear-gradient(135deg, #dd8b8b, #F8DADA);
  border-left: 8px solid #621717;
  border-radius: 16px;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  background: linear-gradient(135deg, #dd8b8b, #F6CFCF);
  box-shadow: 0 10px 25px rgba(98, 23, 23, 0.3);
}

/* ✨ Contenido */
.stat-icon {
  font-size: 3.2em;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 1.1em;
  color: #5a5a5a;
  margin-bottom: 6px;
}

.stat-value {
  font-size: 2.2em;
  font-weight: 800;
  color: #a21717;
}
</style>