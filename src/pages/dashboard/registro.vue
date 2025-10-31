<!-- registro.vue -->
<template>
  <div class="stepper-container">
    <!-- ENCABEZADO -->
    <div class="stepper-header">
      <h1>Registro Colegio Nuevo Horizonte</h1>
      <div class="step-indicators">
        <span
          v-for="n in totalSteps"
          :key="n"
          :class="{ 'active': currentStep === n, 'completed': currentStep > n }"
        >
          Paso {{ n }}
        </span>
      </div>
    </div>

    <!-- CONTENIDO -->
    <div class="stepper-content">
      <!-- PASO 1: BIENVENIDA -->
      <div v-show="currentStep === 1" class="step-card step-center">
        <h2>¡Bienvenidos!</h2>
        <p>
          Bienvenidos al proceso de registro de la Institución Educativa Nuevo Horizonte. Damos la bienvenida a familias y estudiantes que buscan un ambiente educativo seguro, innovador y centrado en el desarrollo integral. Nuestro compromiso es formar personas críticas, creativas y solidarias, apoyadas por docentes calificados y un proyecto pedagógico actualizado.
        </p>
      </div>

      <!-- PASO 2: CÓMO REGISTRARSE -->
      <div v-show="currentStep === 2" class="step-card">
        <h2>Cómo Registrarse</h2>
        <div class="steps-list">
          <p><strong>1.</strong> Lee la Guía de Matrícula: <button class="btn-download" @click="downloadGuide">Descargar Guía</button></p>
          <p><strong>2.</strong> Completa el formulario en línea.</p>
          <p><strong>3.</strong> Adjunta los documentos requeridos.</p>
          <p><strong>4.</strong> Asiste a la entrevista de admisión (si aplica).</p>
          <p><strong>5.</strong> Confirma el pago o solicita una beca.</p>
          <p><strong>6.</strong> Recibirás un correo con la resolución final.</p>
        </div>
      </div>

      <!-- PASO 3: DOCUMENTOS REQUERIDOS -->
      <div v-show="currentStep === 3" class="step-card">
        <h2>Documentos Requeridos</h2>
        <ul>
          <li>Documento de identidad del estudiante y representante.</li>
          <li>Certificado de nacimiento.</li>
          <li>Último reporte de calificaciones.</li>
          <li>Registro de vacunación actualizado.</li>
          <li>2 fotos tamaño documento.</li>
          <li>Formato médico y autorizaciones.</li>
        </ul>
      </div>

      <!-- PASO 4: REQUISITOS POR NIVELES -->
      <div v-show="currentStep === 4" class="step-card">
        <h2>Requisitos por Niveles</h2>
        <ul>
          <li><strong>Preescolar:</strong> 3–5 años cumplidos.</li>
          <li><strong>Primaria:</strong> 6–11 años.</li>
          <li><strong>Secundaria:</strong> 12–17 años.</li>
        </ul>
      </div>

      <div v-show="currentStep === 5" class="step-card step-center">
  <h2>Costos y Opciones de Pago</h2>
  <p>
    Matrícula anual: <strong>$1.200.000</strong>.<br>
    Mensualidades desde <strong>$120.000</strong>.<br>
    Ofrecemos planes trimestrales y becas por mérito o necesidad económica.
  </p>
</div>


      <!-- PASO 6: FORMULARIO -->
      <div v-show="currentStep === 6" class="step-card form-section">
        <h2>Formulario de Registro</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Nombre del estudiante</label>
            <input type="text" v-model="form.nombre" required placeholder="Ej.: Ana María Pérez" />
          </div>
          <div class="form-group">
            <label>Fecha de nacimiento</label>
            <input type="date" v-model="form.fechaNacimiento" required />
          </div>
          <div class="form-group">
            <label>Documento de identidad</label>
            <input type="text" v-model="form.documento" required />
          </div>
          <div class="form-group">
            <label>Teléfono</label>
            <input type="tel" v-model="form.telefono" required />
          </div>
          <div class="form-group">
            <label>Correo electrónico</label>
            <input type="email" v-model="form.correo" required />
          </div>

          <!-- NUEVOS CAMPOS DE DOCUMENTOS -->
          <div class="form-group">
            <label>Subir fotos (2)</label>
            <input type="file" multiple accept="image/*" />
          </div>
          <div class="form-group">
            <label>Certificado de nacimiento</label>
            <input type="file" accept=".pdf,.jpg,.png" />
          </div>
          <div class="form-group">
            <label>Último reporte académico</label>
            <input type="file" accept=".pdf,.jpg,.png" />
          </div>
          <div class="form-group">
            <label>Registro de vacunación actualizado</label>
            <input type="file" accept=".pdf,.jpg,.png" />
          </div>
          <div class="form-group">
            <label>Formato médico y autorizaciones</label>
            <input type="file" accept=".pdf,.jpg,.png" />
          </div>

          <button type="submit" class="btn-submit" :disabled="isLoading">
            {{ isLoading ? 'Enviando...' : 'Enviar Solicitud' }}
          </button>
        </form>
      </div>

      <!-- PASO 7: CONFIRMACIÓN -->
      <div v-show="currentStep === 7" class="step-card step-center">
        <h2>¡Registro completado!</h2>
        <p>Gracias por confiar en la <strong>I.E Nuevo Horizonte</strong>.</p>
        <p>Tu solicitud fue recibida correctamente. En las próximas 48 horas hábiles te contactaremos con más información.</p>
      </div>
    </div>

    <!-- NAVEGACIÓN -->
    <div class="stepper-navigation">
      <button
        v-if="currentStep > 1 && currentStep < totalSteps"
        @click="prevStep"
        class="btn-secondary"
      >
        Atrás
      </button>
      <button
        v-if="currentStep < totalSteps"
        @click="nextStep"
        class="btn-primary"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(1)
const totalSteps = 7

const form = ref({
  nombre: '',
  fechaNacimiento: '',
  documento: '',
  telefono: '',
  correo: ''
})

const isLoading = ref(false)

const nextStep = () => {
  if (currentStep.value < totalSteps) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const submitForm = async () => {
  isLoading.value = true
  await new Promise(r => setTimeout(r, 1500))
  isLoading.value = false
  currentStep.value = 7
}

const downloadGuide = () => alert('Descargando guía...')
</script>

<style scoped>
/* 🖋️ Corrige color del texto dentro de los campos */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
input[type="file"],
textarea {
  color: #000 !important; /* texto negro */
  background-color: #fff !important; /* fondo blanco */
  font-size: 1rem;
}

/* 🔲 Cuando el campo está activo o en foco */
input:focus,
textarea:focus {
  outline: none;
  border: 2px solid #621717;
  background-color: #fffaf6;
  color: #000;
}

/* 📁 Botones de subida de archivos */
input[type="file"]::-webkit-file-upload-button {
  background-color: #621717;
  color: #fffaf6;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #8a2525;
}

.stepper-container {
  background: #fffee8;
  border-radius: 20px;
  padding: 60px 80px;
  width: 100%; /* ocupa el 100% del ancho de la pantalla */
  max-width: 2200px; /* más ancho que antes */
  margin: 10px auto;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  color: #1c1c1c;
  min-height: 80vh; /* ocupa casi toda la altura visible */
}

.stepper-header h1 {
  color: #621717;
  text-align: center;
  font-size: 2.3em;
  font-weight: 800;
}

.step-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
}

.step-indicators span {
  padding: 8px 18px;
  border-radius: 25px;
  background: #ddd;
  color: #333;
  font-weight: bold;
}

.step-indicators span.active {
  background: #621717;
  color: #fff;
}

.step-indicators span.completed {
  background: #000;
  color: #fff;
}

.step-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  margin-top: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-card h2 {
  color: #621717;
  border-bottom: 2px solid #621717;
  padding-bottom: 8px;
  text-align: center;
}

.step-center {
  text-align: center;
}

.form-section {
  background: #fff8f0;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  color: #621717;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
}

.btn-primary {
  background: #621717;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.btn-primary:hover {
  background: #4a1010;
}

.btn-secondary {
  background: #fff;
  color: #621717;
  border: 2px solid #621717;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
.btn-secondary:hover {
  background: #621717;
  color: white;
}

.btn-download {
  background: #621717;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
}

.btn-submit {
  background: #621717;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
}
.btn-submit:hover {
  background: #4a1010;
}

.stepper-navigation {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
}
</style>