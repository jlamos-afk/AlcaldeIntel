<template>
  <v-form @submit.prevent="handleLogin">
    <v-text-field v-model="email" label="Email" type="email" required />
    <v-text-field v-model="password" label="Password" type="password" required />
    <v-btn type="submit" color="primary">Login</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';
import { useAuthStore } from '../store';

const email = ref('');
const password = ref('');
const store = useAuthStore();
const router = useRouter();

async function handleLogin() {
  try {
    const { data } = await api.post('/auth/login', { email: email.value, password: password.value });
    store.setToken(data.accessToken);
    router.push({ name: 'dashboard' });
  } catch (e) {
    console.error(e);
  }
}
</script>
