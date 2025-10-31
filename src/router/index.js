import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import Registro from '@/pages/dashboard/registro.vue'
import Matricula from '@/pages/dashboard/matricula.vue'
import Estadisticas from '@/pages/dashboard/estadisticas.vue'
import Asignaturas from '@/pages/dashboard/asignaturas.vue' // ✅ Nuevo componente importado

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Inicio' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,

     redirect: { name: 'registro' },

    children: [
      { 
        path: 'registro', 
        name: 'registro',
        component: Registro 
      },
      { 
        path: 'matricula', 
        name: 'matricula',
        component: Matricula
      }, 
      // 🎯 Ruta de Estadísticas (pendiente de la corrección anterior)
      { 
        path: 'estadisticas', 
        name: 'estadisticas',
        component: Estadisticas
      },
      // 📚 Nueva Ruta de Asignaturas
      { 
        path: 'asignaturas', 
        name: 'asignaturas',// Esto creará la URL: /dashboard/asignaturas
        component: Asignaturas
      }, 
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard global
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Mi App'
  
  if (to.meta.requiresAuth) {
    const isAuthenticated = false
    if (!isAuthenticated) {
      alert('Debes iniciar sesión')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router