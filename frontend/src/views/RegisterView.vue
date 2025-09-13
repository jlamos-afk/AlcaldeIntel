<template>
  <div>
    <RegisterForm />
    <router-link to="/login">¿Ya tienes cuenta? Inicia sesión</router-link>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '../components/RegisterForm.vue';
</script>
