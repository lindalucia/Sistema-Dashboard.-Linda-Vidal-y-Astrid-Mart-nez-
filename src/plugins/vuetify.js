/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Importa todos los componentes y directivas
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Configuración
export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'system',
  },
})

