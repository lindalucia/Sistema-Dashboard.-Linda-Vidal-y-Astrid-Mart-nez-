// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customDark', // 👈 usamos nuestro propio tema
    themes: {
      customDark: {
        dark: true, // 👈 mantiene modo oscuro
        colors: {
          background: '#fffee8', // 👈 fondo d dn d estan las card d login
          surface: '#1A1A1A',    // 👈 para tarjetas, toolbars, etc.
          primary: '#621717',    // 👈 tu color institucional (vino)
          secondary: '#A52A2A',  // 👈 opcional: tono complementario
          error: '#B71C1C',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})


