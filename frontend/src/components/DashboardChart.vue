<template>
  <v-card>
    <v-card-title>Reportes por Mes</v-card-title>
    <v-card-text>
      <Bar :data="chartData" :options="chartOptions" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const chartData = {
  labels: ['Enero', 'Febrero', 'Marzo'],
  datasets: [
    {
      label: 'Reportes',
      backgroundColor: '#1976D2',
      data: [5, 10, 3]
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
</script>

<style scoped>
.v-card-text {
  height: 300px;
}
</style>
