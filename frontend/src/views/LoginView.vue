<template>
  <div>
    <LoginForm />
    <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
</script>
