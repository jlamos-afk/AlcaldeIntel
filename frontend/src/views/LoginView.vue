<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-btn type="submit" color="primary" class="mt-4" block>Login</v-btn>
            </v-form>
            <v-btn variant="text" class="mt-2" @click="goRegister">Register</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

const submit = async () => {
  await auth.login({ email: email.value, password: password.value })
  await auth.fetchUser()
  router.push({ name: 'dashboard' })
}

const goRegister = () => {
  router.push({ name: 'register' })
}
</script>
