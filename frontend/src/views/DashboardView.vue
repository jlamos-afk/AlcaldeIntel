<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Estadísticas</v-card-title>
          <v-card-text>
            <div>Reportes ciudadanos: 42</div>
            <div>Usuarios activos: 10</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Últimas actividades</v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item v-for="(activity, i) in activities" :key="i">
                <v-list-item-title>{{ activity }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Perfil</v-card-title>
          <v-card-text>
            <div>Nombre: {{ user.name }}</div>
            <div>Email: {{ user.email }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DashboardChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DashboardChart from '../components/DashboardChart.vue';

const activities = ref(['Reporte A', 'Reporte B', 'Reporte C']);
const user = ref({ name: 'John Doe', email: 'john@example.com' });
</script>
