<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Estadísticas</v-card-title>
          <v-card-text>
            <div>Número de reportes ciudadanos: 0</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Últimas actividades</v-card-title>
          <v-card-text>
            <ul>
              <li>Actividad 1</li>
              <li>Actividad 2</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Perfil</v-card-title>
          <v-card-text>
            <div>Nombre: {{ user?.name }}</div>
            <div>Rol: {{ user?.role }}</div>
            <v-btn color="secondary" class="mt-4" @click="logout">Logout</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <DashboardChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import DashboardChart from '../components/DashboardChart.vue'

const auth = useAuthStore()
const router = useRouter()
const user = computed(() => auth.user)

onMounted(() => {
  auth.fetchUser()
})

const logout = () => {
  auth.logout()
  router.push({ name: 'login' })
}
</script>
