<template>
  <v-form @submit.prevent="handleRegister">
    <v-text-field v-model="name" label="Nombre" required />
    <v-text-field v-model="email" label="Email" type="email" required />
    <v-text-field v-model="password" label="Contraseña" type="password" required />
    <v-text-field v-model="confirmPassword" label="Repetir Contraseña" type="password" :rules="[matchPassword]" required />
    <v-btn type="submit" color="primary">Registrarse</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';
import { useAuthStore } from '../store';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const store = useAuthStore();
const router = useRouter();

const matchPassword = (value: string) => value === password.value || 'Las contraseñas no coinciden';

async function handleRegister() {
  if (password.value !== confirmPassword.value) return;
  try {
    await api.post('/auth/register', { name: name.value, email: email.value, password: password.value });
    const { data } = await api.post('/auth/login', { email: email.value, password: password.value });
    store.setToken(data.accessToken);
    router.push({ name: 'dashboard' });
  } catch (e) {
    console.error(e);
  }
}
</script>
