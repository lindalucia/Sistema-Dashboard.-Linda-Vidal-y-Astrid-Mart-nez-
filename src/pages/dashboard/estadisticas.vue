<template>
  <div class="stats text-center"> 
    <h2 style="color: #621717; margin-bottom: 10px;">📊 Estadísticas Detalladas</h2>
    <p style="color: #888; margin-bottom: 30px;">Análisis completo de métricas del sistema</p>
    
    <div class="charts-container">
      
      <div class="chart-card">
        <h3>📈 Matrículas Anuales</h3>
        <div class="chart-placeholder">
          <div class="y-axis">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
          <div class="bars">
            <div 
              v-for="(bar, index) in chartData" 
              :key="index"
              class="bar-container"
            >
              <div 
                class="bar"
                :style="{ height: bar + '%' }"
              ></div>
              <span class="year-label">{{ 2020 + index }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>👥 Matrícula Activa</h3>
        <div class="metric-list">
          <div 
            v-for="metric in metrics" 
            :key="metric.name"
            class="metric-item"
          >
            <span>{{ metric.name }}</span>
            <strong>{{ metric.value }}</strong>
          </div>
        </div>
      </div>
      
      <div class="chart-card">
        <h3>📚 Rendimiento Académico</h3>
        <div class="metric-list">
          <div class="metric-item">
            <span>Promedio General</span>
            <strong>4.5 / 5.0</strong>
          </div>
          <div class="metric-item">
            <span>Asignaturas Aprobadas</span>
            <strong>92%</strong>
          </div>
          <div class="metric-item">
            <span>Tasa de Deserción</span>
            <strong>1.5%</strong>
          </div>
          <div class="metric-item">
            <span>Mejor Asignatura</span>
            <strong>Informática</strong>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>💻 Uso de Plataforma</h3>
        <div class="metric-list">
          <div class="metric-item">
            <span>Usuarios Online Ahora</span>
            <strong>58</strong>
          </div>
          <div class="metric-item">
            <span>Archivos Descargados Hoy</span>
            <strong>1,450</strong>
          </div>
          <div class="metric-item">
            <span>Tiempo Promedio (min)</span>
            <strong>45 min</strong>
          </div>
          <div class="metric-item">
            <span>Lecciones Completadas</span>
            <strong>85%</strong>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// DATOS FINALES Y DEFINITIVOS (6 barras, 2020-2025):
const chartData = ref([70, 65, 88, 80, 80, 100]) 

// Datos para la lista de Matrícula Activa (se mantienen)
const metrics = ref([
  { name: 'Estudiantes hoy', value: '432' },
  { name: 'Matrículas totales', value: '2,847' },
  { name: 'Matrículas nuevas (Mes)', value: '1,934' },
  { name: 'Tasa de retención', value: '94%' }
])
</script>

<style scoped>
/* Estilos para el contenedor principal de los gráficos */
/* NOTA: No se necesita cambiar nada en el CSS, la clase de utilidad text-center es suficiente. */
.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  gap: 25px; 
}

/* Estilos de la CARTA DE ESTADÍSTICAS (.chart-card) */
.chart-card {
  background: #FFECEC; 
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #F5C5C5; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
/* ... (el resto de los estilos se mantienen sin cambios) ... */

.chart-card h3 {
  color: #B22222; 
  margin-bottom: 20px;
  font-size: 1.2em; 
}

/* Estilos para el GRÁFICO DE BARRAS SIMULADO */
.chart-placeholder {
  height: 250px; 
  background: white; 
  border-radius: 8px;
  padding: 10px 10px 0 0; 
  display: flex;
  align-items: flex-end; 
}

/* Eje Y (Escala de Porcentajes) */
.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
  padding-right: 5px;
  color: #888;
  font-size: 0.75em;
  text-align: right;
  transform: translateY(30px); 
}

.bars {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  align-items: flex-end; 
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

/* Contenedor de cada barra y su etiqueta de año */
.bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
}

.bar {
  width: 100%;
  background: linear-gradient(135deg, #B22222, #D2691E); 
  border-radius: 4px 4px 0 0;
  transition: all 0.3s;
}

/* Etiqueta del Año */
.year-label {
  margin-top: 5px;
  font-size: 0.75em;
  color: #666;
}

/* Estilos para las otras cards (métricas) */
.metric-list {
  display: flex;
  flex-direction: column;
  gap: 15px; 
}

.metric-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; 
  background: #FFECEC; 
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  font-size: 1em; 
}

.metric-item strong {
  color: #B22222; 
  font-size: 1.2em; 
}
</style>